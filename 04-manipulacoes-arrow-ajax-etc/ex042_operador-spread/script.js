let numbers = [1, 2, 3, 4];

// aproveitei os itens do array anterior usando o operador spread
let others = [...numbers, 5, 6, 7, 8];

console.log(others);


let info = {
    userName: 'Luan',
    lastName: 'Cordeiro',
    age: 90
}

console.log(info);

let newInfo = {
    ...info,
    state: 'Pará',
    country: 'Brasil'
}

console.log(newInfo);

console.log('---------------');


function addUser(user) {
    let newUser = {
        ...user,
        status: 0,
        token: 'aojijaeio'
    };

    return newUser;
}

console.log(addUser({name: 'Maria', lastName: 'Eduarda'}));