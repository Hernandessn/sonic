// Seletores globais
let number = 0, number1 = 0, number2 = 0;
let cron = null, cron1 = null, min = null;

// Seleção de elementos do DOM
const segundos = document.querySelector('.segundos');
const milisegundos = document.querySelector('.milisegundos');
const minutos = document.querySelector('.minutes');
const fundo = document.querySelector('.fundo');
const fundo1 = document.querySelector('.fundo1');
const painel = document.querySelector('.painel');

// Função para resetar o cronômetro
function resetTimer() {
    number = 0;
    number1 = 0;
    number2 = 0;
    if (segundos) segundos.innerHTML = '0s';
    if (milisegundos) milisegundos.innerHTML = '0ms';
    if (minutos) minutos.innerHTML = '0';
}

// Função para atualizar fundo
function updateBackground(running) {
    fundo1.src = running ? './img/video.run.mp4' : '';
    fundo.src = running ? '' : './img/sonic.wait.mp4';
}

// Iniciar cronômetro
function start() {
    // Evitar múltiplos intervalos
    if (cron !== null || cron1 !== null || min !== null) return;

    cron = setInterval(() => {
        number++;
        if (segundos) segundos.innerHTML = number + "s";
        if (number === 60) number = 0;
    }, 1000);

    cron1 = setInterval(() => {
        number1++;
        if (milisegundos) milisegundos.innerHTML = number1 + "ms";
        if (number1 === 1000) number1 = 0;
    }, 10);

    min = setInterval(() => {
        number2++;
        if (minutos) minutos.innerHTML = number2;
    }, 60000);

    updateBackground(true);
}

// Parar cronômetro
function stop() {
    if (cron !== null) {
        clearInterval(cron);
        cron = null;
    }
    if (cron1 !== null) {
        clearInterval(cron1);
        cron1 = null;
    }
    if (min !== null) {
        clearInterval(min);
        min = null;
    }
    painel.style = '';
    updateBackground(false);
}

// Reiniciar cronômetro
function restart() {
    stop();
    resetTimer();
}
