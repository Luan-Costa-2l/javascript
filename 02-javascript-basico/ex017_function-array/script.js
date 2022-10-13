let fruits = ['Maça', 'Uva', 'Laranja', 'banana'];

// adiciona item ao array
fruits.push('Kiwi');
console.log(fruits);

// remove o último item do array
fruits.pop();
console.log(fruits);

// remove o primeiro item do array
fruits.shift();
console.log(fruits);

// junta os itens com o separador escolhido. ps:não muda o array, e apenas visual.
console.log(fruits.join(', '));
console.log(fruits);

fruits[0] = 'Pêra';
console.log(fruits);

fruits[fruits.length - 1] = 'Melão';
console.log(fruits);