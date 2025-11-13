const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

function getRandomWaitTime() {
    return Math.floor(Math.random() * 5000);
}

function createNestedFolder(folderPath) {
    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
    }
}

function downloadPDF(url, outputPath) {
    return new Promise((resolve, reject) => {
        const dir = path.dirname(outputPath);
        createNestedFolder(dir);
        console.log(dir);
        
        const file = fs.createWriteStream(outputPath);
        const client = url.startsWith('https:') ? https : http;
        const options = {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
                'Accept-Language': 'en-US,en;q=0.5',
                'Accept-Encoding': 'gzip, deflate',
                'Connection': 'keep-alive',
                'Upgrade-Insecure-Requests': '1'
            }
        };
        client.get(url, options, (response) => {
            console.log(response.statusCode);
            if (response.statusCode !== 200) {
                reject(new Error(`HTTP ${response.statusCode}: ${response.statusMessage}`));
                return;
            }
            
            response.pipe(file);
            
            file.on('finish', () => {
                file.close();
                resolve(outputPath);
            });
            
            file.on('error', (err) => {
                fs.unlink(outputPath, () => {});
                reject(err);
            });
        }).on('error', reject);
    });
}

async function downloadPDFsWithWait(urlPaths) {
    const results = [];
    
    for (let i = 0; i < urlPaths.length; i++) {
        const { url, path: outputPath } = urlPaths[i];

        console.log(url, outputPath);
        
        try {
            const result = await downloadPDF(url, outputPath);
            results.push({ success: true, path: result });
        } catch (error) {
            results.push({ success: false, error: error.message, url });
        }
        
        if (i < urlPaths.length - 1) {
            const waitTime = getRandomWaitTime();
            await new Promise(resolve => setTimeout(resolve, waitTime));
        }
    }
    
    return results;
}


module.exports = {
    downloadPDF,
    downloadPDFsWithWait,
    getRandomWaitTime,
    createNestedFolder
};
