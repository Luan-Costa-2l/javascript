let profession = 'fiscal';

console.log('Sua profissão é: ' + profession);

switch (profession) {
    case 'fiscal':
        console.log('Sua camisa será VERDE.');
    break;
    case 'policial':
        console.log('Sua camisa será AZUL.');
    break;
    case 'bombeiro':
        console.log('Sua camisa será VERMELHA.');
    break;
    default:
        console.log('Sua camisa será preta.');
    break;
}