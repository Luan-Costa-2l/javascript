/*
function add(x, y) {
    return x + y;
}
*/

/*
let add = function(x, y) {
    return x + y;
}
*/

/*
let add = (x, y) => {return x + y}
*/

let add = (x, y) => x + y;

console.log(add(10, 6));

/*
let caractesOfName = (user) => {
    return user.length;
}
*/

// quando há apenas um parâmetro, o parênteses são opcionais
let caractesOfName = user => user.length;

console.log(caractesOfName('Luan'));