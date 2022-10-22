let list = [45, 4, 9, 16, 25];

let list2 = [];

/*
// .find() retorna o primeiro item que cumprir as condições estabelecidas.
list2 = list.find((item) => {
    return (item == 16) ? true : false;
});
*/


// funciona como o .find , mas retorna o index e não o item em si.
list2 = list.findIndex((item) => {
    return (item == 16) ? true : false;
});

let res = list2;

console.log(list2);