// funkcija, kuri moka perskaityti viena konkretu faila

const fs = require(`fs/promises`);
const path = require('path');

async function readFile(fileName) {
    try {
        const dataPath = path.join(__dirname, '../data/' + fileName + '.json');
        const content = await fs.readFile(dataPath, 'utf-8');
        return content;
    } catch (error) {
        return false;
    }


}

module.exports = readFile;