// seleciona a largura do item com class .text PS: ele engloba largura, scrollbar, padding e borda
document.querySelector('.text').offsetWidth;

// o mesmo só que na altura
document.querySelector('.text').offsetHeight;


// o mesmo que os anteriaores, mas sem contar o scroll bar e a borda
document.querySelector('.text').clientWidth;

document.querySelector('.text').clientHeight;


// pega a altura de todo o conteúdo contando com a barra de rolagem
document.querySelector('.text').scrollHeight;

document.querySelector('.text').scrollWidth;