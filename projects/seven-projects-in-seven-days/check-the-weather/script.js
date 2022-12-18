const c = (el) => document.querySelector(el);

const handlerRequest = async (event) => {
    event.preventDefault();

    let input = c('input').value;

    if(input) {
        showWarning('Carregando...');

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=89a6eb5ee47e192574b88e443dc43e40&lang=pt_br&units=metric`;

        let response = await fetch(url);
        let json = await response.json();
        showWarning('')

        if(json.cod == 200) {
            showInfo({
                name: json.name,
                country: json.sys.country,
                temp: json.main.temp,
                tempIcon: json.weather[0].icon,
                windSpeed: json.wind.speed,
                windDeg: json.wind.deg
            });
        } else {
            showWarning('Não encontramos esta localização.');
        }
    } else {
        clearInfo()
    }
}

const showInfo = (json) => {
    c('h2').innerHTML = `${json.name}, ${json.country}`;
    c('.tempInfo').innerHTML = `${json.temp.toFixed(2)} <sup>°C</sup>`;
    c('.windInfo').innerHTML = `${json.windSpeed} <span>Km/h</span>`;

    c('.temp img').setAttribute('src', `http://openweathermap.org/img/wn/${json.tempIcon}@2x.png`);

    c('.windArea .windPoint').style.transform = `rotate(${json.windDeg - 90}deg)`;

    c('.result').style.display = 'block';
}

const clearInfo = () => {
    showInfo('');
}

const showWarning = (msg) => {
    c('.result').style.display = 'none';
    c('.warning').innerHTML = msg;
}

c('form').addEventListener('submit', handlerRequest);