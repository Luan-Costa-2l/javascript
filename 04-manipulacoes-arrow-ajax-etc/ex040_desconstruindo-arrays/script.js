let info = ['Luan Cordeiro', 'Luan', 'Cordeiro', '@Luan_Costa_2l'];

// a desconstrução é feita na ordem em que o array está sendo criado.PS: pra pular um item basta deixar um espaço vazio
let [fullName,,, instagram] = info;

console.log(fullName, instagram);

// desconstrui enquanto criei o array
let [age, role] = [90, 'Developer'];

console.log(age, role);

/*
function create() {
    let a = [1, 2, 3];
    return a;
}

let numbers = create();

let [a, b, c] = numbers;
*/

// forma resumida
function create() {
    return [1, 2, 3];
}

let [a, b, c] = create();

console.log(a, b, c);