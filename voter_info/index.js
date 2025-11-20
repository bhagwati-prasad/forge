import * as read from './read.js';
import * as dw from './dw.js';
import * as srch from './search.js';
import { mkdir } from 'fs';
import { writeFile } from 'fs/promises';

// URL https://www.eci.gov.in/sir/f4/U05/data/OLDSIRROLL/U05/{assemblyConstituency}/U05_{assemblyConstituency}_{pollingStationNumber}.pdf
// URL https://www.eci.gov.in/sir/f4/U05/data/OLDSIRROLL/U05/{acNumber}/U05_{acNumber}_{partNumber}.pdf
// distNo : District
// acNo : Assembly Constituency
// partNumber : Polling Station Number

function getSnakeCaseName(name) {
    return name.toLowerCase().replace(/\s+/g, '_');
}

let data2002 = read.readJSVariables('./voter_info_data/2002/2002.js');

function getMandawali2002Data() {
    let mandawali2002 = data2002.mandawali.payload;
    mandawali2002 = mandawali2002.map(item => {
        item.folderName = getSnakeCaseName(item.partName);
        item.url = `https://www.eci.gov.in/sir/f4/U05/data/OLDSIRROLL/U05/${item.acNumber}/U05_${item.acNumber}_${item.partNumber}.pdf`;
        return item;
    });

    mkdir('./voter_info_data/2002/mandawali', { recursive: true }, (err) => {
        if (err) throw err;
    });

    dw.downloadPDFsWithWait(
        mandawali2002.map(item => ({
            url: item.url,
            path: `./voter_info_data/2002/mandawali/${item.folderName}/${item.partNumber}.pdf`
        }))
    );
}

function getPatparganj2002Data() {
    let patparganj2002 = data2002.patparganj.payload;
    patparganj2002 = patparganj2002.map(item => {
        item.folderName = getSnakeCaseName(item.partName);
        item.url = `https://www.eci.gov.in/sir/f4/U05/data/OLDSIRROLL/U05/${item.acNumber}/U05_${item.acNumber}_${item.partNumber}.pdf`;
        return item;
    });

    mkdir('./voter_info_data/2002/patparganj', { recursive: true }, (err) => {
        if (err) throw err;
    });

    dw.downloadPDFsWithWait(
        patparganj2002.map(item => ({
            url: item.url,
            path: `./voter_info_data/2002/patparganj/${item.folderName}/${item.partNumber}.pdf`
        }))
    );
}

function getVishvasNagar2002Data() {
    let vishvasnagar2002 = data2002.vishwasNagar.payload;
    vishvasnagar2002 = vishvasnagar2002.map(item => {
        item.folderName = getSnakeCaseName(item.partName);
        item.url = `https://www.eci.gov.in/sir/f4/U05/data/OLDSIRROLL/U05/${item.acNumber}/U05_${item.acNumber}_${item.partNumber}.pdf`;
        return item;
    });

    mkdir('./voter_info_data/2002/vishvas_nagar', { recursive: true }, (err) => {
        if (err) throw err;
    });

    dw.downloadPDFsWithWait(
        vishvasnagar2002.map(item => ({
            url: item.url,
            path: `./voter_info_data/2002/vishvas_nagar/${item.folderName}/${item.partNumber}.pdf`
        }))
    );
    
}



function search() {
    let srchTerm = 'lalita indoria';
    let results = srch.searchInPDFs(srchTerm, './voter_info_data/2002')
    results.then(async res => {
        await writeFile(`results__${getSnakeCaseName(srchTerm)}.json`, JSON.stringify(res, null, 4));
        console.log(`Results written to results__${getSnakeCaseName(srchTerm)}.json`);
    }).catch(err => {
        console.error(err);
    });
}

search();