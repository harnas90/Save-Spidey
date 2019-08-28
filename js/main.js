const panel = document.querySelector(".score");
const shopButtons = [...document.querySelectorAll(".shop")];
const timerSpan = document.querySelector(".timer");
const points = document.querySelector(".points");
const result = document.querySelector(".result");
const start = document.querySelector(".start");
const reset = document.querySelector(".reset");

let score = 0;
let time = 30;
let number = 1;
let idInterval;
let flag = false;

const addPoints = () => {
    if (score < 3000 && flag) {
        score += number;
        points.textContent = score;
    };
    resultsWinner();

};

function changeNumberValue() {
    const btnValue = this.dataset.value;
    const cost = this.dataset.cost;
    if (score >= cost) {
        score -= cost;
        points.textContent = score;
        number += Number(btnValue);
    };
};

const resultsWinner = () => {
    if (score >= 3000) {
        result.textContent = "We won Mr Stark. We won. You did it sir.";
        clearInterval(idInterval);
    };
};

const resultsLoser = () => {
    if (score < 3000) {
        flag = false;
        result.textContent = "You lost the kid.";
        clearInterval(idInterval);
    };
};

const timer = () => {
    time--;
    timerSpan.textContent = `${time} sec`
};

const startGame = () => {
    flag = true;
    idInterval = setInterval(timer, 1000);
    score = 0;
    points.textContent = score;
    time = 30;
    timerSpan.textContent = `${time} sec`
    result.textContent = "---";
    setTimeout(resultsLoser, 30000);
};

const gameReset = () => {
    flag = false;
    clearInterval(idInterval);
    score = 0;
    points.textContent = score;
    time = 30;
    timerSpan.textContent = `${time} sec`
    result.textContent = "---";
    number = 1;

};


panel.addEventListener('click', addPoints);
shopButtons.forEach((button) => {
    button.addEventListener('click', changeNumberValue);
});
start.addEventListener('click', startGame);
reset.addEventListener('click', gameReset);