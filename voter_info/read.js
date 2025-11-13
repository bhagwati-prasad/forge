const fs = require('fs');
const path = require('path');
const vm = require('vm');

function getGlobalVariableNames(filePath) {
    try {
        if (!fs.existsSync(filePath)) {
            throw new Error(`File not found: ${filePath}`);
        }
        
        const fileContent = fs.readFileSync(filePath, 'utf8');
        
        const context = {};
        vm.createContext(context);
        
        vm.runInContext(fileContent, context);
        
        return Object.keys(context);
    } catch (error) {
        console.error(`Error reading JS file for variable names: ${error.message}`);
        throw error;
    }
}

function readJSVariables(filePath) {
    try {
        if (!fs.existsSync(filePath)) {
            throw new Error(`File not found: ${filePath}`);
        }
        
        const fileContent = fs.readFileSync(filePath, 'utf8');
        
        const context = {};
        vm.createContext(context);
        
        vm.runInContext(fileContent, context);
        
        return context;
    } catch (error) {
        console.error(`Error reading JS file: ${error.message}`);
        throw error;
    }
}

function readJSModuleVariables(filePath) {
    try {
        const absolutePath = path.resolve(filePath);
        
        delete require.cache[absolutePath];
        
        return require(absolutePath);
    } catch (error) {
        console.error(`Error requiring JS module: ${error.message}`);
        throw error;
    }
}

module.exports = {
    readJSVariables,
    readJSModuleVariables,
    getGlobalVariableNames
};
