// troca a class do item box
function colorToggle() {
    let box = document.getElementById('box').classList;
    if (box == 'red') {
        box.remove('red');
        box.add('green');
    } else {
        box.remove('green');
        box.add('red');
    }
}

// executa a função a cada 700 milisegundos
setInterval(colorToggle, 700);