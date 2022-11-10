// Elements
const input = document.querySelector('input');
const list = document.querySelector('ul');

// Functions
function newItem(e) {
    if(e.key === 'Enter') {
        let newLi = document.createElement('li');
        newLi.innerHTML = input.value;
        list.append(newLi);
        
        input.value = '';
    }
}

// Events
input.addEventListener('keyup', newItem);