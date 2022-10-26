let person = {
    name: 'Luan',
    lastName: 'Cordeiro',
    age: 90,
    social: {
        facebook: 'Luan-Costa-2l',
        instagram: {
            url: 'https://www.instagram.com/luan_costa_2l/',
            followrs: 80
        }
    },
    fullName: function() {
        return `${this.name} ${this.lastName}`;
    }
}


// pegando informações mais a fundo
// let {facebook, instagram} = person.social;

let {name, age, social:{facebook}} = person;
console.log(name, facebook);

// pegando a url e renomeando-a
let {social:{instagram:{url:instagram, followrs}}} = person;

console.log(instagram, followrs);

/*
function getFullName(obj) {
    let name = obj.name;
    let lastName = obj.lastName;
    return `${name} ${lastName}`;
}
*/

// desconstruindo diretamente na função
function getFullName({name, lastName}) {
    console.log(`${name} ${lastName}`);
}
console.log(getFullName(person));