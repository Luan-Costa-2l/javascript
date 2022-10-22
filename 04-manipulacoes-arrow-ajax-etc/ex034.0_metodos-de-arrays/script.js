let list = ['Ovo', 'Farinha', 'Corante', 'Massa'];

/*
.toString();  transforma em string unindo com vírgula.
.join('');  transforma em string unindo os elementos com o parâmetro indicado.
.indexOf('Corante');  busca o parâmetro indicado e retorna o indice do elemento no array (caso exista, se não retorna -1).

alterando diretamente o array:
.pop();  remove o último item do array.
.shift();  remove o primeiro item do array.
.push('item');  adiciona um novo item ao array.
list[0] = 'Ovos';  troca o item indicado na lista pelo novo (nesse caso 'Ovos')

*/

list[0] = 'Ovos';

let res = list;

console.log(res.toString());

console.log(res.join('-'));

console.log(res.indexOf('Corante'));

console.log(res);

res[res.length] = 'Trigo';
console.log(res);
