// usei o operador rest aqui para permitir que a função receba quantos parâmetros forem necessários

// aqui a função recebe todos os parâmetros que derem a ela e mostra no console em forma de array
function add(...info) {
    console.log(info);
}

add(5, 3,  'Luan', 6, 'Costa', 8);


// spread and rest

function addNewUsers(user, ...newUsers) {
    let newResult = [
        ...user,
        ...newUsers
    ];

    return newResult;
}

let user = ['Luan', 'Eduarda'];

let others = addNewUsers(user, 'Paulo', 'Maria', 'Albert');

console.log(others);
