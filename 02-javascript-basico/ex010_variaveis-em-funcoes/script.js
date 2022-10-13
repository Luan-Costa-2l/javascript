/*
Variáveis criadas dentro de funções existem apenas lá dentro.(escopo local) ps:a local tem preferência
*/

function add() {
    let count = 0;
    count++;
}

add();
add();

// console.log(count);


// variáveis criadas fora da função podem ser usadas dentro dela.(escopo global)
let adc = 0;

function sun() {
    adc += 10;
}

sun();
sun();

console.log(adc)