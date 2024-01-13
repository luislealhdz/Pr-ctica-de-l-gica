"use-strict";

const askForANumber = prompt("Número a factorial");

const factorial = (number) =>
    number === 0 || number === 1 ? 1 : number * factorial(number - 1);

const number = parseInt(askForANumber);

console.log(factorial(number));
