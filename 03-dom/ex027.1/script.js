let item = document.querySelector('button');
let noColor = false;
function colorToggle() {
    if (noColor) {
        item.classList.remove('black');
        item.classList.add('red');
        noColor = false;
    } else {
        item.classList.remove('red')
        item.classList.add('black');
        noColor = true;
    }
}



function toExchange() {
    if (document.querySelector('button').classList.contains('black')) {
        document.querySelector('button').classList.remove('black');
        document.querySelector('button').classList.add('red');
    } else {
        document.querySelector('button').classList.remove('red');
        document.querySelector('button').classList.add('black');
    }
}