let user = 'Luan Cordeiro da Costa';

// número de caracteres na váriavel
console.log(user.length);

// indica onde começa o item indicado ps: se não existir ele retorna -1
console.log(user.indexOf('Cordeiro'));


// usei o indexOf para verificar se o item indicado existe na variável/string
let result = '';
if (user.indexOf('Cordeiro') > -1) {
    result = 'Achou!';
} else {
    result = 'Não achou!';
}

console.log(result);