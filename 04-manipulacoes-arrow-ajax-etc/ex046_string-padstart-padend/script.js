let phone = '6575648';
/*
nesse caso o primeiro parâmetro diz quantos caracteres minha string tem que ter e o segundo o item que ela vai usar pra preencher do lado esquerdo o que faltar.
*/
console.log(phone.padEnd(9, '*'));

// funcina como o padEnd, mas preenche pelo lado esquerdo.
console.log(phone.padStart(9, '*'));


/* situção: mostrar apenas os últimos 4 digitos do cartão*/

let card = '1234123412341234';

let lastDigits = card.slice(-4);

console.log(`Este é o seu cartão? ${lastDigits.padStart(16, '*')}`);