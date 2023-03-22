const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const zero = document.querySelector('#zero');
const decimal = document.querySelector('#decimal');

const multi = document.querySelector('#multiply');
const add = document.querySelector('#sum');
const divi = document.querySelector('#divide');
const sub = document.querySelector('#subtract');
const equal = document.querySelector('#equal');

const numberDisplay = document.querySelector('.numbers')

const clear = document.querySelector('#clear');

clear.addEventListener('click' , () => {
    numberDisplay.textContent = "";
})