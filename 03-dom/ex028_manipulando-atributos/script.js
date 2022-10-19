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