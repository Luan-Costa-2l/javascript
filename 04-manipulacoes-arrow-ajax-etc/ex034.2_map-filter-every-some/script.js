let list = [45, 4, 9 , 16, 25];
let list2 = []

/*
// vai aplicar a função a cada item do array.
list2 = list.map(function(item) {
    return item * 2;
});
*/


/*
// verifica todos os itens de um array e retorna true or false caso siga ou não a condição estabelecida.
list2 = list.filter((item) => {
    if(item > 20) {
        return true;
    } else {
        return false;
    }
})
*/

/*
// o .every() faz o mesmo que o .filter() só que ele não retorna um novo array e retorna true or false somente caso todos os itens do array sigam a condição estabelecida.
list2 = list.every((item) => {
    if(item < 50) {
        return true;
    } else {
        return false;
    }
});
*/


/*
// .some() retorna true or false caso algum item atenda a condição estabeleida
list2 = list.some((item) => {
    if(item < 2) {
        return true;
    } else {
        return false;
    }
});
*/

// forma resumida de se usar os itens acima.
list2 = list.every((item) => {
    return (item > 3)? true : false;
});


let res = list2;

console.log(res);



