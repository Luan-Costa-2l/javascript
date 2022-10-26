let person = {
    name: 'Luan',
    lastName: 'Cordeiro',
    age: 90,
    social: {
        facebook: 'Luan-Costa-2l',
        instagram: 'Luan-Costa-2l'
    },
    fullName: function() {
        return `${this.name} ${this.lastName}`;
    }
}

/*
let name = person.name;
let lastName = person.lastName;
let age. person.age;
*/

// uma forma mais fácil e rápida de salvar as informações do objeto em variáveis
let {name:personName, lastName, age = 0} = person;
// name:personName troquei o nome da variável
// age = 0 defini um valor padrão caso não exista no objeto

console.log(personName, lastName, age);