// ENTRADA -> PROCESSAMENTO -> SAIDA

// return me permite armazenar a saída da função, sem ele não é possível armazenar a saída.

function nomeCompleto(nome, sobrenome) {
    return `${nome} ${sobrenome}`;
}

let completo = nomeCompleto('luan', 'costa');
console.log(completo);