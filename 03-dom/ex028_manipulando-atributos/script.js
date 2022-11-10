/*
Nesta funcão eu troquei o atributo do src pelo caminho da imagem que eu queria usar
*/
function changeImage(fileName, techName) {
    document.querySelector('.image').setAttribute('src', 'images/' +fileName);

    // essa linha é um treino
    document.querySelector('.image').setAttribute('data-tech', techName);
}

// peguei o atributo, salvei em uma variável e dei um alert
function getTech() {
    let tech = document.querySelector('.image').getAttribute('data-tech');
    alert('O aparelho é: ' + tech);
}


function txt() {
    const input = document.querySelector('.input');

    console.log(input.getAttribute('type'));

    // verifica há o atributo na tag
    console.log(input.hasAttribute('placeholder'));

    // alterando o atributo type password para text
    input.setAttribute('type', 'text');
}


function yn() {
    const input = document.querySelector('.input');
    const button = document.querySelector('.button');


    if(input.getAttribute('type') == 'password') {
        input.setAttribute('type', 'text');
        button.innerHTML = 'Ocultar senha';
    } else {
        input.setAttribute('type', 'password');
        button.innerHTML = 'Mostrar senha';
    }
}