// As interações estudadas em sua maioria criam novos arrays (salve-os em algum lugar)

let fruits = ['Banana', 'Laranja', 'Maça', 'Pêra', 'Uva'];

// o filter cria um novo array, salve ele em algum lugar
/*
let bigFruits = fruits.filter((item) => {
    if (item.length > 4) {
        return true
    } else {
        return false
    }
});
*/

// (value, index, array)

let bigFruits = fruits.filter((item) => {
    return item.length > 4
});

console.log(bigFruits);

console.log('-------------------');


// o every retorna valores true ou false caso todos ou nenhum cumpra a condição estabelecida
/*
let ok = fruits.every((value) => {
    if (value.length > 4) {
        return true;
    } else {
        return false;
    }
});
*/

let ok = fruits.every((value) => {
    return value.length > 3;
})

if (ok) {
    console.log('Todos são maiores que 3');
} else {
    console.log('Não são todos maiores que 3');
}


console.log('-------------');

// O some retorna true ou false caso algum cumpra a condição
let some = fruits.some((value) => {
    return value.length > 3;
})

if (ok) {
    console.log('Algum é maior que 3');
} else {
    console.log('Nenhum é maior que 3');
}


console.log('-------------');


// o includes verifica se o array possui o item indicado
if (fruits.includes('Uva')) {
    console.log('Tem Uva sim!');
} else {
    console.log('Não tem Uva...');
}