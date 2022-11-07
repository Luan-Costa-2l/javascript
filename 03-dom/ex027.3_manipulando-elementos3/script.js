function mudou() {
    const test = document.querySelector('#test');
    const ul = test.querySelector('ul');

    const newButton = document.createElement('button');
    newButton.innerHTML = 'Botão';

    ul.after('Texto qualquer');
    ul.before(newButton);
}

let ul = document.querySelector('.list ul')
let newUl = document.createElement('ul');

ul.after(newUl);

for(let i = 0; i < 5; i++) {
    let newLi = document.createElement('li');
    newLi.innerHTML = `Um novo elemeno ${i}`;
    newUl.append(newLi);
}
