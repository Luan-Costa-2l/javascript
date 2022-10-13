let personagem = {
    nome: 'Luan',
    idade: 90,
    pais: 'Brasil',
    olhos: ['preto', 'azul'],
    caracteristicas: {
        forca: 20,
        magia: 5,
        stamina: 15
    }
}

console.log(`${personagem.nome} tem ${personagem.idade} anos.`);

console.log(`${personagem.nome} tem ${personagem.caracteristicas.magia} de força.`);

console.log(personagem.olhos[1]);


personagem.nome = 'Pedro';
personagem.caracteristicas.forca += 5;
personagem.olhos.push('verde');


console.log(personagem.nome);
console.log(personagem);

console.log('-------------------');


let person = {
    name: 'Luan',
    age: 90,
    carros: [
        {model: 'Fiat', color: 'black'},
        {model: 'Ferrari', color: 'red'}
    ]
}

console.log(person.carros[1].model)