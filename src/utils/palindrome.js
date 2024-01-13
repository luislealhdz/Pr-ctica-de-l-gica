"use-strict";

const askForAWord = () => {
    const word = prompt("Palabra");
    return word;
};

const cleanWord = (word) => word.toLowerCase().replace(/\s/g, "");

const isPalindrome = (word) => {
    const reverseWord = word
        .split("")
        .reverse()
        .join(" ");

    return word === reverseWord;
};

const word = askForAWord();

const cleanAskedWord = cleanWord(word);

console.log(
    `'${word}' ${isPalindrome(cleanAskedWord) ? "is a" : "isn´t a "} palindrome`
);
