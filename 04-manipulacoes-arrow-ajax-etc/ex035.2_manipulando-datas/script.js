/*A troca do ano, mês, etc. segue o mesmo padrão aprendido na aula anterior, mas no lugar de get coloque set */

let d = new Date();

let res = d;

console.log(res);

// Troca o ano:
// res.setFullYear(2024);

// troca o Mês:
// res.setMonth(11);

// aumentei o número de dias em 5. PS: pra fazer o mesmo com mês, ano, etc. basta seguir a mesma lógica
res.setDate(res.getDate() + 5);
console.log(res.getDate());