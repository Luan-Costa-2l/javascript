// cria um objeto da class date que recebe a data atual do dispositivo que está acessando (pc, celular, etc)
let d = new Date();

let res = d;
console.log(res);

// Uma data mais resumida
console.log(res.toDateString());

// tira o fuso horário
console.log(res.toUTCString());

console.log(new Date(2022, 0, 22, 11, 7, 12));
console.log(new Date('2022-01-22 15:42:17'));

console.log(new Date(0).toDateString());