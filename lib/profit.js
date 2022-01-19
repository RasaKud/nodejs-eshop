// funkcija, kuri skaiciuoja uzdirbtu pinigu kieki (kiek suprekiauta)

function profit(goodsInfo){

    let sum = 0;
    for (const item of goodsInfo){
    
    sum += item.price.value * item.sold
    }
        return sum;
    }
    
    module.exports = profit;