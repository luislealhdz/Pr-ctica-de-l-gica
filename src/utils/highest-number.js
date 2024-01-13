"use-strict";

const askForNumbers = () => {
    const numbers = [];

    const totalNumbers = prompt("Total de números");

    for (let i = 0; i < parseInt(totalNumbers); i++) {
        const number = prompt(`Número ${i + 1}`);
        numbers.push(parseInt(number));
    }

    return numbers;
};

const getHighestNumber = (numbers) => {
    let highestNumber = numbers[0];

    for (let i = 0; i <= numbers.length; i++) {
        if (highestNumber < numbers[i]) {
            highestNumber = numbers[i];
        }
    }

    return `Highest number : ${highestNumber}`;
};

const numbers = askForNumbers();

console.log(getHighestNumber(numbers));
