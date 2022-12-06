class Person {

    age = 0;
    steps = 0;

    constructor(name) {
        this.name = name;
    }

    // actions
    takeAStep() {
        this.steps++;
    }

    setAge(newAge) {
        if(typeof newAge == 'number') {
            this.age = newAge;
        }
    }
}

let p1 = new Person('João');
let p2 = new Person('Maria');
let p3 = new Person('Pedro');

p1.age = 20;

console.log(`P1 = ${p1.name} tem ${p1.age} anos`);
console.log(`P2 = ${p2.name} tem ${p2.age} anos`);
console.log(`P3 = ${p3.name} tem ${p3.age} anos`);

// p1.takeAStep();
// p1.takeAStep();
// console.log(`Passos de ${p1.name}: ${p1.steps}`)
// console.log(`Passos de ${p2.name}: ${p2.steps}`)



p1.setAge(19);

console.log(`${p1.name} tem ${p1.age}`)

export const ppp = () => {
    alert('oi');
}