// funkcija, kuri moka perskaityti viena konkretu faila

const fs = require('fs/promises');
const path = require('path');

// funkcija, kuri moka perskaityti viena konkretu faila

async function readFile(itemName) {
    try {
        const filePath = path.join(__dirname, `../data/${itemName}.json`);
        const itemText = await fs.readFile(filePath, 'utf-8');
        return itemText;
    } catch (error) {
        return false;
    }
}

module.exports = readFile;