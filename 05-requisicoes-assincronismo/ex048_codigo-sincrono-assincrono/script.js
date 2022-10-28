// Código SÍNCRONO
// a proxima linha só será executada após a atual
let name = 'Luan';
let lastName = 'Cordeiro';
let fullName = `${name} ${lastName}`;


// Códgo ASSÍNCRONO
// roda a próxima linha de código antes da atual terminar
let name = 'Luan';
let lastName = 'Cordeiro';
let weather = Machine.getWeather(); // assíncrona
let fullName = `${name} ${lastName}`;