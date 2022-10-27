let list = ['ovo', 'macarrão', 'feijão', 'pipoca'];

// retorna um array com os indeces dos itens
console.log(Object.keys(list));

//retorna o valor de cada item, nesse caso o próprio array
console.log(Object.values(list));

// retorna um array com um array contendo o indece e o valor de cada item.
console.log(Object.entries(list));


let person = {
    Name: 'Luan',
    lastName: 'Cordeiro',
    age: 90
};

// retorna um array com o nome de cada item
console.log(Object.keys(person));


console.log(Object.values(person));

console.log(Object.entries(person));