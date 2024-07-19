"use strict";

// get prompt
let number = Number(prompt("Enter a number: "));

// create random number
let random = Math.floor(Math.random() * 100000);
let numberSwitch;

if (number > random) {
    numberSwitch = 0;
} else if (number === random) {
    numberSwitch = 1;
} else if (number < random) {
    numberSwitch = 2;
} else {
    alert("I'm not sure about that one.")
}

// compare to random number
switch (numberSwitch) {
    case 0:
        document.querySelector('#para').innerHTML = `Your number: ${number} is greater the secret number: ${random}`;
        break;
    case 1:
        document.querySelector('#para').innerHTML = `Your number: ${number} is equal to the secret number: ${random}`;
        break;
    case 2:
        document.querySelector('#para').innerHTML = `Your number: ${number} is less than the secret number: ${random}`;
        break;
    default:
        document.querySelector('#para').innerHTML = "I don't know";
        break;
}