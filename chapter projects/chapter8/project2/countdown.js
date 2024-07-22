"use strict";

let endDate = "9 August 2024";

function countdown() {
    let total = Date.parse(endDate) - Date.now();
    let days = Math.floor(total / (1000 * 60 * 60 * 24));
    let hrs = Math.floor(total / (1000 * 60 * 60 ) % 24);
    let mins = Math.floor(total / (1000 * 60 ) % 60);
    let secs = Math.floor((total / 1000) % 60);

    let remainingTime = {
        days: days,
        hours: hrs,
        minutes: mins,
        seconds: secs
    };

    return remainingTime;
    // return console.log(`There are ${remainingTime.days} days, ${remainingTime.hours} hours, ${remainingTime.minutes} minutes and ${remainingTime.seconds} seconds left.`);
}

countdown();

function update() {
    let tempVar = countdown();
    let output = "";

    for (let prop in tempVar) {
        output += (`${prop} : ${tempVar[prop]}`);
    }

    let timer = console.log(output);
    setTimeout(update, 1000);
}

update();