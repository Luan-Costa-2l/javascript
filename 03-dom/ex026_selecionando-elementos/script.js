/* Alterei o que estava dentro da div, mas nao confunda o que está de verdade no html e o que aparece na tela, pois o botão veio do javascript */
document.getElementById('exemple').innerHTML = "Pedro <button>botão</button>";

document.getElementById('exemple');

// está no ploral pois pode haver mais de um elemento com a mesma class. Retorna um array, trate-o como tal
document.getElementsByClassName('list');
// ex:
document.getElementsByClassName('list')[0].style.color = '#00FF00';


// Selecionando e elemento pelo nome da tag
document.getElementsByTagName('button')[1].style.padding = '10px 15px';

// Selecionando e elemento pelo seu name
document.getElementsByName('email');


// RESUMO:
document.getElementById('...');
document.getElementsByClassName('...');
document.getElementsByTagName('...');
document.getElementsByName('...');