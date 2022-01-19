// funkcija, kuri gauna prekiu sarasa ir ji isspausdina nurodytu formatu

const IsValid = require("./IsValid.js");

// funkcija, kuri gauna prekiu sarasa ir ji isspausdina nurodytu formatu

function printList(list) {
    let table = [];

    let i = 0;
    for (const item of list) {
        const { name, price, inStock, sold } = item;
        table.push(`${++i}) ${name}: ${price.value} ${price.currency}; parduota: ${sold}; likutis: ${inStock};`);

    }

    return table.join('\n');
}

module.exports = printList;