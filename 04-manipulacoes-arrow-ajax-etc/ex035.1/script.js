let d = new Date();

let res = d;

// retorna o ano
console.log('Ano: ', res.getFullYear());

// retorna o mês
console.log('Mês: ', res.getMonth());

// ALERT retorna o dia da semana (começa no Domingo(0) até o sábado(6))
console.log('Dia da semana: ', res.getDay());

// pega o dia do mês
console.log('Dia do Mês: ', res.getDate());

console.log('Minutos: ', res.getMinutes());

console.log('Segundos: ', res.getSeconds());

console.log(res.getMilliseconds());

// retorna os milisegundos desde que o javascript começou a contar em 1970
console.log(res.getTime());

// O mesmo de cima, mas sem precisar da variável
console.log(Date.now())