function mudou() {
    const test = document.querySelector('#test');
    const ul = test.querySelector('ul');

    ul.children[0].append('(Alterado)');

    let newLi = document.createElement('li');
    newLi.innerText = 'Item adicionado';

    // ul.appendChild(newLi);

    ul.prepend(newLi);
}

// o innerHTML substitue todo o conteúdo por uma cópia com as modificações
// o .append() apenas adiciona as alterações. ps: só funciona pra texto
// isso não atrapalha muito, mas se for adicionar algo em um conteúdo muito grande use o append

// com o .appendChild() posso adicionar elementos html no final tb
// o .prepend() adiciona antes/nocomeço
