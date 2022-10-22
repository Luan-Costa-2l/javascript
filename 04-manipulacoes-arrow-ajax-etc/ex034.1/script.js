let list = ['Ovo', 'Farinha', 'Corante', 'Massa'];

/*
.splice(1, 1);   a partir do índece 1 remova 1 item.
.concat(list2);  concatena duas listas a primeira com a indicada como parâmetro (nesse caso a list2 foi a indicada).

alterando diretamente a lista
.sort();  organiza o array em ordem alfabetica/crescente.
.reverse(); inverte a ordem dos itens da lista (combine com o .sort() para conseguir ordem decrescente).
*/

list.sort();
list.reverse();

let res = list;

console.log(res);