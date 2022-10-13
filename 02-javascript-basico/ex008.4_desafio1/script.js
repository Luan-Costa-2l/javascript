/*
Calcule a porcentagem entre dois números.
Exemplo: 25% de 40 é 10
*/

function calcPct(x, y) {
    return (y * 100) / x;
}

let x = 40;
let y = 10;

let pct = calcPct(x, y);
console.log(`${pct}% de ${x} é ${y}.`);
