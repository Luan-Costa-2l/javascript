// let apenas no contexto que foi criada
let name = "Luan";
console.log(name);

// var funciona em qualquer contexto
var lastName = "Costa";
console.log(lastName);

// const um valor que não muda (uma constante)
const job = "Web Developer";
console.log(job);


console.log("------------------");

let x = 2;
let y = 3;
x = x * 3;
console.log(x);
y = y ** 3;
console.log(y);

let soma = 2 * (x + y);
console.log(soma);

console.log("------------------");
// operação com strings e template string

let userName = "Luan";
let userLastName = "Costa";

// let user = userName + " " + userLastName
let user = `${userName} Cordeiro da ${userLastName}`;
console.log(user);
console.log("User: " + user);


let idade = 90;

let idadeString = `Idade: ${idade + 2} anos`;

console.log(idadeString);