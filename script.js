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

one.addEventListener('click' , () => {
    numberDisplay.textContent += "1";
})
two.addEventListener('click' , () => {
    numberDisplay.textContent += "2";
})
three.addEventListener('click' , () => {
    numberDisplay.textContent += "3";
})
four.addEventListener('click' , () => {
    numberDisplay.textContent += "4";
})
five.addEventListener('click' , () => {
    numberDisplay.textContent += "5";
})
six.addEventListener('click' , () => {
    numberDisplay.textContent += "6";
})
seven.addEventListener('click' , () => {
    numberDisplay.textContent += "7";
})
eight.addEventListener('click' , () => {
    numberDisplay.textContent += "8";
})
nine.addEventListener('click' , () => {
    numberDisplay.textContent += "9";
})
zero.addEventListener('click' , () => {
    numberDisplay.textContent += "0";
})
decimal.addEventListener('click' , () => {
    numberDisplay.textContent += ".";
})

let sign = "";

function sum(number1 , number2){
    return number1 + number2;
}

function subtract(number1 , number2){
    return number1 - number2;
}

function multiply(number1 , number2){
    return number1 * number2;
}

function divide(number1 , number2){
    return number1 / number2;
}

function operate (operator , first , second){
    if(operator == "+"){
        return parseInt(first) + parseInt(second);
    }else if(operator == "-"){
        return subtract(first , second);
    }else if(operator == "*"){
        return multiply(first , second);
    }else if(operator == "/"){
        if (second == 0){
            return "Can't divide by zero"
        }else{
            return divide(first , second);
        }
    }else{
        return "Not a featured operator"
    }
}