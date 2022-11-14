function check() {
    console.log('test');
}

function submit() {
    alert(output.textContent);
}

function reset() {
    outputInt = 0;
    output.textContent = outputInt;
}

function randomOne() {
    outputInt = randomNumber(1000000000,2000000000)
    output.textContent = outputInt;
}

function randomTwo() {
    outputInt = randomNumber(2000000001, 3000000000)
    output.textContent = outputInt;
}

function randomThree() {
    outputInt = randomNumber(3000000001, 4000000000)
    output.textContent = outputInt;
}

function randomFour() {
    outputInt = randomNumber(4000000001, 5000000000)
    output.textContent = outputInt;
}

function randomFive() {
    outputInt = randomNumber(5000000001, 6000000000)
    output.textContent = outputInt;
}

function randomSix() {
    outputInt = randomNumber(6000000001, 7000000000)
    output.textContent = outputInt;
}

function randomSeven() {
    outputInt = randomNumber(7000000001, 8000000000)
    output.textContent = outputInt;
}

function randomEight() {
    outputInt = randomNumber(8000000001, 9000000000)
    output.textContent = outputInt;
}

function randomNine() {
    outputInt = randomNumber(9000000001, 9999999999)
    output.textContent = outputInt;
}

function randomNumber(min,max){
    const num = Math.floor(Math.random() * (max-min+1)) + min;
    return num;
}

const output = document.querySelector('.output');
let outputInt = parseInt(output.textContent);
console.log(outputInt);

const zeroButton = document.querySelector('.zero-button').addEventListener('click', randomOne);
const oneButton = document.querySelector('.one-button').addEventListener('click', randomTwo);
const twoButton = document.querySelector('.two-button').addEventListener('click', randomThree);
const threeButton = document.querySelector('.three-button').addEventListener('click', randomFour);
const fourButton = document.querySelector('.four-button').addEventListener('click', randomFive);
const fiveButton = document.querySelector('.five-button').addEventListener('click', randomSix);
const sixButton = document.querySelector('.six-button').addEventListener('click', randomSeven);
const sevenButton = document.querySelector('.seven-button').addEventListener('click', randomEight);
const eightButton = document.querySelector('.eight-button').addEventListener('click', randomNine);

const submitButton = document.querySelector('.submit-button').addEventListener('click', submit);