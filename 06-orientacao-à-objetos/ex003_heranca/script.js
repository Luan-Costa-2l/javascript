// todo Student é também um Person, mas nem todo Person é um Student
class Person {

    age = 20;

    constructor(name) {
        this.name = name;
    }

    sayHi() {
        console.log(`${this.name} diz oi`);
    }

}

// se eu estiver usando um Student e recriar uma função existente em Person no Student a que foi declarada no Student sobrepõe a anterior
class Student extends Person {

    constructor(name, id) {
        super(name);
        this.id = id;
    }

    sayHello() {
        // aqui eu sobreponho a função de Person
        // console.log(`${this.name} é um estudante e diz oi`);

        // aqui eu executo a função de Person
        super.sayHi();
    }
}

let p1 = new Student('Luan', 1);
p1.age = 21;

console.log(`${p1.name} tem ${p1.age} anos e matricula #${p1.id}`);

p1.sayHello();

// Herança me lembra bastante conjuntos