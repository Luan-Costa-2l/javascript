/*
Calcule o preço do imóvel
- m2 = 3.000
- Se tiver 1 quarto, o m2 é 1x
- Se tiver 2 quartos, o m2 é 1.2x
- Se tiver 3 quartos, o m2 é 1.5x
Uso da função:
*/


// Minha solução:
function calcImovel(metros, quartos) {
    let m2 = 3000;
    let n = 0;
    if (quartos == 1) {
        n = 1;
    } else if (quartos == 2) {
        n = 1.2;
    } else if (quartos == 3) {
        n = 1.3;
    }
    return (m2 * n) * metros;
}

let metragem = 100;
let quartos = 2;
let preco = calcImovel(metragem, quartos);
console.log(`A casa custa R$ ${preco}`);


// Solução em aula:
function calcularImovel(metragem2, quartos2) {
    let m2 = 3000;
    let preco = 0;

    switch (quartos2) {
        case 1:
        default:
            preco = metragem2 * m2;
            break;
        case 2:
            preco = (metragem2 * 1.2) * m2;
            break;
        case 3:
            preco = (metragem2 * 1.3) * m2;
            break;
    }
    return preco
}

let metragem2 = 100;
let quartos2 = 2;
let preco2 = calcImovel(metragem2, quartos2);
console.log(`A casa custa R$ ${preco2}`);