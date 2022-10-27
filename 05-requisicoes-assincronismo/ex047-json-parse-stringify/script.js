// tranformando string em JSON. PS: a string deve seguir a configuração abaixo.
let person = JSON.parse('{"name": "Luan", "idade": 90}');

console.log(person);

console.log('-'.repeat(10));

// transforma o objeto (JSON) em string
let person2 = JSON.stringify({name: 'Maria', age: 90});
console.log(person2);

console.log('-'.repeat(10));

console.log(JSON.parse(person2));