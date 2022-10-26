let timer;

// espera um tempo e dps executa a função ai acaba
function start(){
    timer = setTimeout(() => {
        document.querySelector('.demo').innerHTML = 'Rodou!';
    }, 2000);
}

// para o setTimerout antes que ele comece
function stop() {
    clearTimeout(timer);
}
