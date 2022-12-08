class Person {

    age = 20;

    constructor(name) {
        this.name = name;
    }

}

// uma factory é uma função que cria um objeto nesse caso cria um Person;

// criar um factory me ajuda na criação de instancias como no exemplo da aula que eu uso uma função pra criar um Person

function createPerson(name, age) {
    let p = new Person(name);
    p.age = age;
    return p;
}

let p1 = createPerson('Luan', 90);

console.log(`${p1.name} tem ${p1.age} anos`);