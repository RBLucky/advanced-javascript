"use strict";

let friend = prompt("Give us a name: ");

switch (friend) {
    case "Vhukhudo":
        document.querySelector('#para').innerHTML = `Yep ${friend} is a friend. Confirmed`;
        break;
    case "Lucky":
        document.querySelector('#para').innerHTML = `Yep ${friend} is a friend. Confirmed`;
        break;
    case "Sipho":
        document.querySelector('#para').innerHTML = `Yep ${friend} is a friend. Confirmed`;
        break;
    default:
        document.querySelector('#para').innerHTML = `I cannot confirm. I don't know ${friend}`;
        break;
}