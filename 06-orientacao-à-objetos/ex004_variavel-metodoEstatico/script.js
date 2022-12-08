class Person {

    // o statica é um dado geral e não se aplica a ninguém especificamente
    static hands = 2
    age = 20;

    constructor(name) {
        this.name = name;
    }

    sayHi() {
        console.log(`oi, eu sou ${this.name} e tenho ${Person.hands}`);
    }

    static sayHello() {
        console.log(`Olá, ${this.name}`);
    }

}

let p1 = new Person('Luan');
p1.sayHi();

console.log(`${p1.name} tem ${Person.hands} mãos.`);

Person.sayHello();

p1.sayHello(); // Error