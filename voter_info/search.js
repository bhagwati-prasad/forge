const fs = require('fs').promises;
const path = require('path');
const { exec } = require('child_process');
const { promisify } = require('util');
const PDFParser = require("pdf2json");

const execAsync = promisify(exec);

/**
 * Searches for a string in all PDF files within nested directories
 * @param {string} searchString - The string to search for
 * @param {string} rootDir - The root directory to search in
 * @returns {Promise<Array>} Array of objects containing file path and matches
 */
async function searchInPDFs(searchString, rootDir) {
    const results = [];
    
    try {
        const pdfFiles = await findPDFFiles(rootDir);
        
        for (const pdfPath of pdfFiles) {
            try {
                const matches = await searchInPDF(searchString, pdfPath);
                if (matches.length > 0) {
                    results.push({
                        file: pdfPath,
                        matches: matches
                    });
                }
            } catch (error) {
                console.error(`Error searching in ${pdfPath}:`, error.message);
            }
        }
        
        return results;
    } catch (error) {
        throw new Error(`Failed to search PDFs: ${error.message}`);
    }
}

/**
 * Recursively finds all PDF files in a directory
 * @param {string} dir - Directory to search
 * @returns {Promise<Array>} Array of PDF file paths
 */
async function findPDFFiles(dir) {
    const pdfFiles = [];
    
    async function traverse(currentDir) {
        const entries = await fs.readdir(currentDir, { withFileTypes: true });
        
        for (const entry of entries) {
            const fullPath = path.join(currentDir, entry.name);
            
            if (entry.isDirectory()) {
                await traverse(fullPath);
            } else if (entry.isFile() && path.extname(entry.name).toLowerCase() === '.pdf') {
                pdfFiles.push(fullPath);
            }
        }
    }
    
    await traverse(dir);
    return pdfFiles;
}

/**
 * Searches for a string in a single PDF file using pdf2json
 * @param {string} searchString - The string to search for
 * @param {string} pdfPath - Path to the PDF file
 * @returns {Promise<Array>} Array of matching lines with page numbers
 */
async function searchInPDF(searchString, pdfPath) {
    return new Promise((resolve, reject) => {
        const pdfParser = new PDFParser();
        
        pdfParser.on("pdfParser_dataError", errData => {
            reject(new Error(`PDF parsing error: ${errData.parserError}`));
        });
        
        pdfParser.on("pdfParser_dataReady", pdfData => {
            const matches = [];
            const searchLower = searchString.toLowerCase();
            
            pdfData.Pages.forEach((page, pageIndex) => {
                page.Texts.forEach(textItem => {
                    const decodedText = decodeURIComponent(textItem.R[0].T);
                    if (decodedText.toLowerCase().includes(searchLower)) {
                        matches.push(`${pageIndex + 1}:${decodedText.trim()}`);
                    }
                });
            });
            
            resolve(matches);
        });
        
        pdfParser.loadPDF(pdfPath);
    });
}

module.exports = {
    searchInPDFs,
    findPDFFiles,
    searchInPDF
};