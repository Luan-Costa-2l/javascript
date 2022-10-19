let user = 'Luan Cordeiro da Costa';

// trocou Cordeiro por C.
let result = user.replace('Cordeiro', 'C.');

console.log(user);
console.log(result);

// torna maiúsculo
console.log(user.toUpperCase());

// torna minúsculo
console.log(user.toLowerCase());


// concatena (adiciona) os elementos indicados a string. PS:pouco usado (existem formas melhores de concatenar)
console.log(user.concat(' ', '2l'))

// mostra o caracter que está na posição indicada ou usa user[2]
console.log(user.charAt(2));


// separa a string no ponto indicado (nesse caso o ' ' foi usado pra dividir) e transforma em um array
console.log(user.split(' '));


let user2 = '    Luan    ';

// Remove os espaços antes e depois da string
console.log(user2.trim());