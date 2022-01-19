// funkcija, kuri skaiciuoja visu likutiniu (neparduotu) prekiu kieki

//const IsValid = require("./IsValid.js")

function inStockTotalCount(goodsInfo){

let sum = 0;
for (const item of goodsInfo){

sum += item.inStock
}
    return sum;
}

module.exports = inStockTotalCount;