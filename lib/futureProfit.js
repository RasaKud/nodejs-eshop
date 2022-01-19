// funkcija, kuri apskaiciuoja, uz kiek dar galima suprekiauti is likusiu prekiu

function futureProfit(goodsInfo){

    let sum = 0;
    for (const item of goodsInfo){
    
        sum += item.price.value * item.inStock
    }
        return sum;
    }
    
    module.exports = futureProfit;