// mostra a posição vertical do scroll de um item
document.querySelector('.text').scrollTop;


// mostra a posição horizontal do scroll
document.querySelector('.text').scroll;


// mostra o scroll vertical da tela inteira
window.scrollY;


// leva o scroll de um elemento pro começo
// scroll(x, y)
document.querySelector('.text').scrollTo(0, 0);


window.scrollTo(0, 0);


/*
function toTop() {
    window.scrollTo(0, 0);
}
*/

// leva pro topo da tela
function toTop() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
}


// função decide se o botão aparece ou não
function showButton() {
    if (window.scrollY === 0) {
        document.querySelector('.scrollbutton').style.display = 'none';
    } else {
        document.querySelector('.scrollbutton').style.display = 'inline-block';
    }
}

// executa a função a cada 1000 milisegundos
// setInterval(showButton, 1000);

window.addEventListener('scroll', showButton);