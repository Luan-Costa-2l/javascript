// initial data
const sElement = document.querySelector('.p_s');
const mElement = document.querySelector('.p_m');
const hElement = document.querySelector('.p_h');

// functions
const getHours = () => {
    let now = new Date();
    let cHours = now.getHours();
    let cMinutes = now.getMinutes();
    let cSeconds = now.getSeconds();

    let result = `${fixZero(cHours)}:${fixZero(cMinutes)}:${fixZero(cSeconds)}`;
    document.querySelector('.digital').innerHTML = result;

    let sec = ((360 / 60) * cSeconds) - 90;
    let min = ((360 / 60) * cMinutes) - 90;
    let hour = ((360 / 12) * cHours) - 90;

    sElement.style.transform = `rotate(${sec}deg)`;
    mElement.style.transform = `rotate(${min}deg)`;
    hElement.style.transform = `rotate(${hour}deg)`;
}

const fixZero = (time) => {
    return time < 10 ? `0${time}`: time;
}

// const moveSecondsPointer = () => {
//     document.querySelector('.p_s').style.transform = 'rotate(90deg)';
// }

getHours();
setInterval(getHours, 1000);

