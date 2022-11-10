function blue() {
    remove();

    document.getElementById("title").classList.add('blue');
}

function red() {
    remove();

    document.getElementById("title").classList.add('red');
}

function green() {
    remove();

    document.getElementById("title").classList.add('green');
}

function remove() {
    document.getElementById("title").classList.remove('blue', 'red', 'green');
}



function showPhone(element) {
    element.style.display = "none";

    document.getElementById("hide").style.display = "block";

    document.getElementById("phone").style.display = "block";
}

function hidePhone(element) {
    element.style.display ="none";

    document.getElementById("show").style.display = "block";

    document.getElementById("phone").style.display = "none";
}

// Juntei as funções acima em uma
function showToggle() {
    const phone = document.querySelector('#phone');
    const button = document.querySelector('.button');

    if(phone.style.display === 'block') {
        phone.style.display = 'none';
        button.innerHTML = 'Mostrar telefone';
    } else {
        phone.style.display = 'block';
        button.innerHTML = 'Ocultar telefone';
    }
}

document.addEventListener('keyup', () => console.log('Soltou'));