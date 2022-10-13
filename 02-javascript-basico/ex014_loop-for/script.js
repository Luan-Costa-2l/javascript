for (let n = 0; n < 10; n++) {
    console.log('Frase qualquer')
}


let cores = ['preto', 'branco', 'azul', 'vermelho'];
cores.push('verde');


/*
for (let i = 0; i < cores.length; i++) {
    console.log(cores[i]);
}*/



console.log('------------------')
// O 'in' vai pergar a chave(0, 1, 2,...) do array
for (let c in cores) {
    console.log(cores[c]);
}


console.log('------------------')
// O 'of' pega o valor de cada item no array(como a cor 'preto' nesse caso)
for (let cor of cores) {
    console.log(cor);
}


console.log('------------------')
let colors = [
    {nome: 'preto', qt: 10},
    {nome: 'azul', qt: 5},
    {nome:'vermelho', qt: 15}
];

for (let cor of colors) {
    console.log(`Nome: ${cor.nome.toUpperCase()} - ${cor.qt}`);
}
