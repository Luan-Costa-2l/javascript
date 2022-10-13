let ingredientes = [
    'agua',
    'farinha',
    'ovo',
    'fermento',
    'corante'
];

/*
adicionando um item quando se sabe a quantidade que ele possui.(menos indicado)

ingredientes[5] = 'leite';
console.log(ingredientes);
*/


// vai adicionar o item ao array
ingredientes.push('leite');
console.log(ingredientes);

// gambiarra que fiz
ingredientes[ingredientes.length] = 'suco';
console.log(ingredientes);


// remove o último item
ingredientes.pop();
console.log(ingredientes);


// remove o primeiro item do array
ingredientes.shift();
console.log(ingredientes)


console.log(`Total de ingredientes: ${ingredientes.length}`);