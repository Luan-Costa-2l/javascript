const c = (el: string) => document.querySelector(el);
const cs = (el: string) => document.querySelectorAll(el);

c('.top')?.append = 'uhuhui';