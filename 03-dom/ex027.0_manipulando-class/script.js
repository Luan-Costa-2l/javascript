let item = document.querySelector('div');

function green() {
    removed();
    item.classList.add('green');
}

function red() {
    removed();
    item.classList.add('red');
}

function blue() {
    removed();
    item.classList.add('blue');
}

function removed() {
    item.classList.remove('green', 'red', 'blue');
}

function biggest() {
    item.classList.toggle('bigger');
    console.log(item)
}