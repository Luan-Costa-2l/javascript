const char = new Knight('Luan');
const monster = new LittleMonter();


const stage = new Stage(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster')
);

stage.start();