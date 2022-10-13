/*
Crie uma função que valide usuário e senha.
*/

function validar(usuario, senha) {
    if (usuario === 'luan' && senha === 1234) {
        return true;
    } else {
        return false;
    }
}

let usuario = 'luan';
let senha = 1234;
let validacao = validar(usuario, senha);
if (validacao) {
    console.log('Acesso concedido.');
} else {
    console.log('Acesso NEGADO.');
}

// Treinando um pouco.
function validar(user, password) {
    if (user === 'luan' && password === 1234) {
        return 'Acesso concedido.';
    } else if (user === 'luan' && password !== 1234) {
        return 'Acesso NEGADO. Senha incorreta';
    } else if (user !== 'luan' && password === 1234) {
        return 'Acesso NEGADO. Usuário não cadastrado.';
    } else {
        return 'Acesso NEGADO. Tente novamente.';
    }
}

let user = 'luan';
let password = 1234;
let acesso = validar(user, password);
console.log(acesso);
console.log(validar(user, password));