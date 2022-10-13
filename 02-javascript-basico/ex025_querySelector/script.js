/*
O querySelector me permite selecionar o item da mesma forma que no CSS, no caso abaixo selecionei a lista desordenada com a class .list. PS: ele seleciona apenas o primeiro item
*/
document.querySelector("ul.list");

// selecionei o item com o id title
document.querySelector("#title").innerHTML = "Mudando o título";

/*
Ao contrário do anterior ele permite selecionar todos os item que atendem a condição estabelecida (class list) e retorna um array com eles
*/
document.querySelectorAll(".list");


/*
Armazenei o array que o querySelectorAll deu em uma variável
*/
let list = document.querySelectorAll("li");
console.log(list);

for (let i in list) {
    list[i].style.color = '#FF0000';
}