let age = 18;

// <, >, ==, <=, >=, !=, ===
if (age >= 18) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você é MENOR de idade.");
};


// diferença entre == e ===

let number = "20";

// O === é mais restritivo que o ==
if (number === 20) {
    console.log("Você tem 20 anos");
};

// nesse caso o js somou um number com uma string, que não era o que queriamos
if (number == 20) {
    number = number + 15;
    console.log ("Idade adicionada com sucesso")
    console.log(number)
};