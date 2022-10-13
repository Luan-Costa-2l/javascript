let pessoa = {
    nome: 'Luan',
    sobrenome: 'Cordeiro',
    idade: 90,
    nomeCompleto: function() {
        return `${this.nome} ${this.sobrenome}`;
    }
}

console.log(pessoa.nomeCompleto());