// situação exemplo: em um ecomerce se o usuário for membro o frete será 2 se não será 10.
let isMember = false;

let shipping = isMember ? 2 : 10;

console.log(isMember ? `Você é membro` : `Você não é membro`);
console.log("Frete: " + shipping);

// exemplo 2
let age = 90;

let isAdult = ((age >= 18) ? `Sim` : `Não`);

console.log(isAdult)