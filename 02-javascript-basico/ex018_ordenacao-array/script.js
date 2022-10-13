let fruits = [2, 4, 3, 1];
console.log(fruits);

// Ordena o array em ordem crescente/alfabetica(a - z)
fruits.sort();
console.log(fruits);
// Inverte a ordem do array (usei aqui pra colocar em ordem decrescente ou de z - a)
fruits.reverse();
console.log(fruits);


console.log('--------------');

let cars = [
    {brand: 'Fiat', year: 2022},
    {brand: 'Bmw', year: 2018},
    {brand: 'Ferrari', year: 2020}
];


/*
cars.sort((a, b) => {
    if (a.year > b.year) {
        return 1;
    } else if (a.year < b.year) {
        return -1;
    } else {
        return 0;
    }
});
*/

cars.sort((a, b) => {
    return a.year - b.year;
});


console.log(cars);