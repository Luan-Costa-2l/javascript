let age = 50;

/*
if (age >= 18) {
    if (age < 60) {
        console.log("Você é um adulto.")
    } else {
        console.log("O senhor já tem mais idade.")
    }
}
*/
// condicional dupla
// && - and
// || - or
if (age < 18) {
    console.log("Você é uma criança.");
} else if (age >= 18 && age < 60) {
    console.log("Você é um adulto.");
} else if (age >= 60) {
    console.log("Você é um idoso.");
}


// entendendo mais sobre condicionais e boleans
let ok = false;

let check = age > 18 && age < 60;

if (check) {
    console.log("Entrou no IF");
} else {
    console.log("Não entrou no IF")
}
