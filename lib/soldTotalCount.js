// funkcija, kuri skaiciuoja visu parduotu prekiu kieki

function soldTotalCount(goodsInfo){

    let sum = 0;
    for (const item of goodsInfo){
    
    sum += item.sold
    }
        return sum;
    }
    
    module.exports = soldTotalCount;