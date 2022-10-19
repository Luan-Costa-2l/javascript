let user = 'Luan Cordeiro da Costa';
/*
corta a string começando do primeiro parâmetro e se indicado até o segundo parâmetro. PS: se indicado um número negativo ele vai começar a contar do final até o começo (de frente pra trás)
*/
console.log(user.slice(-5));


// corta a string começando do primeiro parâmetro e se indicado até o segundo parâmetro
console.log(user.substring(5, 13));


// funciona como o substring, mas o segundo parâmetro aqui indica o número de caracteres a serem mostrados
console.log(user.substr(5, 8));