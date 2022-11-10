function digitou(e) {
    if (e.keyCode == 13 && e.ctrlKey == true) {
        let text = document.getElementById("campo").value;

        console.log(text);
    }
}


function drop(e) {
    // O .code mostra mais detalhadamente a tecla clicada, enquanto o .key mostra de uma forma mais simplória
    console.log(`Tecla apertada: ${e.key}`);

    console.log(`SHIFT? ${e.shiftKey}`);
}

const input = document.querySelector('input');
input.addEventListener('keyup', drop);
