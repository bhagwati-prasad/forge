import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'
};

class AmadeusClient {
  clientId;
  clientSecret;
  accessToken = null;
  tokenExpires = 0;
  apiBaseUrl = 'https://api.amadeus.com';
  constructor(clientId, clientSecret){
    this.clientId = clientId;
    this.clientSecret = clientSecret;
  }

  async getNewToken() {
    const response = await fetch(`${this.apiBaseUrl}/v1/security/oauth2/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `grant_type=client_credentials&client_id=${this.clientId}&client_secret=${this.clientSecret}`
    });
    if (!response.ok) throw new Error(`Amadeus Token Error: ${await response.text()}`);
    const data = await response.json();
    this.accessToken = data.access_token;
    this.tokenExpires = Date.now() + (data.expires_in - 60) * 1000;
    return this.accessToken;
  }

  async getToken() {
    if (!this.accessToken || Date.now() > this.tokenExpires) {
      return this.getNewToken();
    }
    return this.accessToken;
  }
  
  async getIataCode(token, cityName) {
    const url = `${this.apiBaseUrl}/v1/reference-data/locations?subType=CITY,AIRPORT&keyword=${encodeURIComponent(cityName)}`;
    const response = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    if (!response.ok) throw new Error(`Amadeus IATA Error: ${await response.text()}`);
    const data = await response.json();
    if (data.data && data.data.length > 0) {
      const majorLocation = data.data.find((loc)=>loc.subType === 'CITY' || loc.analytics?.flights?.score > 10) || data.data[0];
      return majorLocation.iataCode;
    }
    throw new Error('No IATA code found for city');
  }

  // Gets ONE fare for ONE destination using Flight Inspiration
  async getCheapestFare(token, originIata, destinationIata) {
    const departureDate = new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
    const url = `${this.apiBaseUrl}/v1/shopping/flight-destinations?origin=${originIata}&destination=${destinationIata}&departureDate=${departureDate}&oneWay=true&nonStop=false&viewBy=DESTINATION`; // PRODUCTION URL
    const response = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    if (!response.ok) {
      console.error(`Failed to get fare for ${originIata}->${destinationIata}`);
      return null;
    }
    const data = await response.json();
    if (data.data && data.data.length > 0) {
      return data.data[0];
    }
    return null;
  }
}
// --- Main Edge Function ---
Deno.serve(async (req)=>{
  if (req.method === 'OPTIONS') {
    return new Response('ok', {
      headers: corsHeaders
    });
  }
  try {
    const { targetRegion } = await req.json();
    if (!targetRegion) throw new Error('targetRegion is required');
    const destinationMap = {
      "North America": [
        "LAS",
        "MIA",
        "MCO",
        "NYC",
        "LAX",
        "DFW",
        "ATL",
        "IAH",
        "ORD",
        "PHX",
        "WAS",
        "FLL"
      ],
      "Canada": [
        "YVR",
        "YYZ",
        "YUL",
        "YYC",
        "YQB",
        "YOW",
        "YHZ",
        "YEG",
        "YWG",
        "YYJ",
        "YYT",
        "YXS"
      ],
      "Latin America": [
        "CUN",
        "LIM",
        "GRU",
        "SJO",
        "BOG",
        "GUA",
        "UIO",
        "EZE",
        "SCL",
        "GYE",
        "MTY",
        "SDQ"
      ]
    };
    const targetDestinations = destinationMap[targetRegion];
    if (!targetDestinations) throw new Error('Invalid targetRegion');
    const ipAddress = req.headers.get('x-forwarded-for')?.split(',')[0].trim() || '8.8.8.8'; // Use Google DNS as fallback for testing
    const IPDATA_API_KEY = Deno.env.get('IPDATA_API_KEY');
    const ipdataResponse = await fetch(`https://api.ipdata.co/${ipAddress}?api-key=${IPDATA_API_KEY}`);
    if (!ipdataResponse.ok) throw new Error(`Failed to fetch IP data: ${await ipdataResponse.text()}`);
    const ipdata = await ipdataResponse.json();
    const originCity = ipdata.city;
    if (!originCity) throw new Error('Could not determine city from IP');
    const AMADEUS_KEY = Deno.env.get('AMADEUS_KEY');
    const AMADEUS_SECRET = Deno.env.get('AMADEUS_SECRET');
    if (!AMADEUS_KEY || !AMADEUS_SECRET || !IPDATA_API_KEY) {
      throw new Error("Missing API Secrets in Supabase Function");
    }
    const amadeus = new AmadeusClient(AMADEUS_KEY, AMADEUS_SECRET);
    const token = await amadeus.getToken();
    const originIata = await amadeus.getIataCode(token, originCity);
    const supabaseClient = createClient(Deno.env.get('SUPABASE_URL') ?? '', Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '');
    const twelveHoursAgo = new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString();
    const { data: cachedData, error: cacheError } = await supabaseClient.from('cached_fares').select('fares_data, last_updated').eq('origin_iata', originIata).eq('target_region', targetRegion).single();
    if (cachedData && new Date(cachedData.last_updated) > twelveHoursAgo) {
      return new Response(JSON.stringify(cachedData.fares_data), {
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json'
        },
        status: 200
      });
    }
    // This is the 12-call logic
    const farePromises = targetDestinations.map((destIata)=>amadeus.getCheapestFare(token, originIata, destIata));
    const results = await Promise.allSettled(farePromises);
    const faresData = {};
    results.forEach((result, index)=>{
      const destIata = targetDestinations[index];
      if (result.status === 'fulfilled' && result.value) {
        faresData[destIata] = {
          price: parseFloat(result.value.price.total),
          currency: result.value.price.currency
        };
      } else {
        faresData[destIata] = null;
        console.error(`Failed to get fare for ${originIata} -> ${destIata}:`, result.reason || "Unknown error");
      }
    });
    const successfulFares = Object.values(faresData).filter((f)=>f !== null).length;
    if (successfulFares > 0) {
      await supabaseClient.from('cached_fares').upsert({
        origin_iata: originIata,
        target_region: targetRegion,
        fares_data: faresData,
        last_updated: new Date().toISOString()
      }, {
        onConflict: 'origin_iata, target_region'
      });
    }
    return new Response(JSON.stringify(faresData), {
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/json'
      },
      status: 200
    });
  } catch (error) {
    return new Response(JSON.stringify({
      error: error.message
    }), {
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/json'
      },
      status: 500
    });
  }
});


/*
Fetch error from https://hhbozxunhqlzsmvzfnet.supabase.co/functions/v1/fetch-dynamic-fare: {
  "error": "No fare data could be retrieved from any source."
}
*/