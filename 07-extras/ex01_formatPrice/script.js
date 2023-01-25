let price = 40.32;

let priceFormated = price.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});

document.querySelector('.priceLine strong').innerHTML = priceFormated;