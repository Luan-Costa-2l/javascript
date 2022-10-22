let list = [
    {id: 1, name: 'Luan', lastName: 'Cordeiro'},
    {id: 2, name: 'Bonieky', lastName: 'Lacerda'},
    {id: 3, name: 'Carlos', lastName: 'Germano'},
    {id: 4, name: 'João', lastName: 'Lacerda'}
];

let person = list.filter((item) => {
    return (item.lastName === 'Lacerda') ? true : false;
});

let res = person;

console.log(res);