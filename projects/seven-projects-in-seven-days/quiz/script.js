// Initial Data
let currentQuestion = 0;
let correctAnswer = 0;

showQuestion();

// Events
document.querySelector('.scoreArea button').addEventListener('click', resetEvent)


// Funcions
function showQuestion() {
    if(questions[currentQuestion]) {
        let q = questions[currentQuestion];

        let pct = Math.floor((currentQuestion / questions.length) * 100);

        document.querySelector('.progress--bar').style.width = `${pct}%`;

        document.querySelector('.scoreArea').style.display = 'none';
        document.querySelector('.questionArea').style.display = 'block';

        document.querySelector('.question').innerHTML = q.question;
        // a baixo eu salvei as manipulações em uma variável e só depois mandei pro html para poupar tempo e processamento.
        let optionsHtml = '';
        for(let i in q.options) {
           optionsHtml += `<div data-op="${i}" class="option"><span>${parseInt(i) + 1}</span>${q.options[i]}</div>`;
        }
        document.querySelector('.options').innerHTML = optionsHtml;

        document.querySelectorAll('.options .option').forEach((item) => {
            item.addEventListener('click', optionClickEvent);
        })

    } else {
        finishQuiz();
    }
}

function optionClickEvent(e) {
    let clikedOption = parseInt(e.target.getAttribute('data-op'));

    if(questions[currentQuestion].answer === clikedOption) {
        correctAnswer++;
    }

    currentQuestion++;
    showQuestion();
}

function finishQuiz() {
    let points = Math.floor((correctAnswer / questions.length) * 100);

    if(points < 30) {
        document.querySelector('.scoreText1').innerHTML = 'Tá ruim em!';
        document.querySelector('.scorePct').style.color = '#FF0000';
    } else if(points < 70) {
        document.querySelector('.scoreText1').innerHTML = 'Muito bom!';
        document.querySelector('.scorePct').style.color = '#FFFF00';
    } else if(points >= 70) {
        document.querySelector('.scoreText1').innerHTML = 'PARABÉNS!';
        document.querySelector('.scorePct').style.color = '#0D630D';
    }

    document.querySelector('.scorePct').innerHTML = `Acertou ${points}%`;
    document.querySelector('.scoreText2').innerHTML = `Você respondeu ${questions.length} questões e acertou ${correctAnswer}.`;

    document.querySelector('.questionArea').style.display = 'none';
    document.querySelector('.scoreArea').style.display = 'block';
    document.querySelector('.progress--bar').style.width = `100%`;
}

function resetEvent() {
    correctAnswer = 0;
    currentQuestion = 0;
    showQuestion();
}