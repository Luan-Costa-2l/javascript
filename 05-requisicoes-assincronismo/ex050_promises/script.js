/* Daqui a um tempo três coisas podem acontecer nunca ter resultado, ter o resultado depois de um tempo, dar erro */

function getTemperature() {
    return new Promise(function(resolve, reject) {
        console.log('Pegando temperatura...');
        
        setTimeout(function() {
            resolve('40 na sombra');
        }, 2000);
    });
}


// usando a promise
console.log('Antes');

let temp = getTemperature();

console.log('Durante');

// quando tiver resultado execute:
temp.then(function(result) {
    console.log(result);
});
// se der errado faz isso
temp.catch(function(error) {
    console.log('Eita, deu erro!');
});

console.log('Depois!');