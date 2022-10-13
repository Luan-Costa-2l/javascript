/*
function getDayOfWeek(date) {
    const dayOfWeek =  new Date(date).getDay();
    return isNaN(dayOfWeek) ? null:
        ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dayOfWeek];
}

console.log(getDayOfWeek( new Date() )); // or
*/
let html = '';
let c = 0;

while (c <= 10) {
    html += `Número: ${c} <br>`;
    c++;
}

document.getElementById('day').innerHTML = html;