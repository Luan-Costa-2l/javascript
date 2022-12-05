// initial data
const c = (el) => document.querySelector(el);
const cs = (el) => document.querySelectorAll(el);

// functions
const del = () => {
    c('.top').innerHTML = '';
}
const clean = () => {
    let value = c('.top').innerHTML;
    c('.top').innerHTML = value.slice(0, value.length - 1);
}
const addOperator = (operator) => {
    c('.top').append(operator);
}
const addNumber = (number) => {
    c('.top').append(number);
    let i = 0;
}
const showResult = () => {
    let value = c('.top').innerHTML;
    c('.top').innerHTML = eval(value);
}