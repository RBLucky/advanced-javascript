"use strict";
/*
let rain = true;

if (rain) {
    console.log("** Taking my umbrella when I need to go outside **");
} else {
    console.log("** I can leave my umbrella at home **");
}


let age = prompt("How old are you? ");

if (Number(age) < 18) {
    alert("We're very sorry, but you can't get in under 18");
} else {
    alert("Welcome!");
}
*/
/** Exercise 4.1 */
/*
let studying = true;

console.log(studying);

if (studying) {
    console.log("relax");
}

if (!studying) {
    console.log("start studying");
}

studying = false;

if (studying) {
    console.log("relax");
} else {
    console.log("start studying");
}


let age = Number(prompt("How old are you?"));
let cost = 0;
let message;

if (age < 3) {
    cost = 0;
    message = "Access is free under three.";
} else if (age >= 3 && age < 12) {
    cost = 5;
    message = "With the child discount, the fee is 5 dollars";
} else if (age >= 12 && age < 65) {
    cost = 10;
    message = "A regular ticket costs 10 dollars.";
} else {
    cost = 7;
    message = "A ticket is 7 dollars.";
}

alert(message);
alert(`Your total cost: $${cost}.00`);
*/

/** Exercise 4.2 */
/*
let age = Number(prompt("How old are you?"));

let message;

if (age >= 21 ) {
    message = "Entry confirmed.\nWelcome to the big leagues.\nFeel free to get hammered!";
} else if (age >= 19 && age < 21) {
    message = "Imagine being under 21.\nYou can enter though, but no booze!";
} else {
    message = "Just go home.";
}

alert(message);


let age = Number(prompt("How old are you?"));

let access = age < 18 ? "Access denied" : "Welcome";
alert(access);
*/
/** Exercise 4.3 */
/*
let id = false;
console.log("Do you have an ID?: ", id);
let message = id ? "Nice picture, welcome to the venue." : "Where's your ID? Just go home.";
console.log(message);
*/

//let activity = prompt("What do you need to do?\nI'll tell you the time.")
/*
if(activity === "Get up") {
    alert("It is 6:30AM");
   } else if(activity === "Breakfast") {
    alert("It is 7:00AM");
   } else if(activity === "Drive to work") {
    alert("It is 8:00AM");
   } else if(activity === "Lunch") {
    alert("It is 12.00PM");
   } else if(activity === "Drive home") {
    alert("It is 5:00PM")
   } else if(activity === "Dinner") {
    alert("It is 6:30PM");
} 

switch(activity.toLowerCase()) {
    case "get up":
        document.querySelector('#para').innerHTML = "It is 6:30AM";
        break;
    case "breakfast":
        document.querySelector('#para').innerHTML = "It is 7:00AM";
        break;
    case "drive to work":
        document.querySelector('#para').innerHTML = "It is 8:00AM";
        break;
    case "lunch":
        document.querySelector('#para').innerHTML = "It is 12.00PM";
        break;
    case "drive home":
        document.querySelector('#para').innerHTML = "It is 5:00PM";
        break;
    case "dinner":
        document.querySelector('#para').innerHTML = "It is 6:30PM";
        break;
}
*/

/** eXERCISE 4.4 */
/*
let random = Math.floor(Math.random()*6);
console.log(random);

let string = prompt("Tell me something, I really wanna hear it.");

switch (random) {
    case 0:
        document.querySelector('#para').innerHTML = "Wow, really?";
        break;
    case 1:
        document.querySelector('#para').innerHTML = "Yeah it be like that sometimes.";
        break;
    case 2:
        document.querySelector('#para').innerHTML = "Lol imagine";
        break;
    case 3:
        document.querySelector('#para').innerHTML = "Yeah same";
        break;
    case 4:
        document.querySelector('#para').innerHTML = "Same thing happened";
        break;
    case 5:
        document.querySelector('#para').innerHTML = "Okay";
        break;
    default:
        document.querySelector('#para').innerHTML = "Thanks for sharing";
}


let grade = ["A", "B", "C", "D", "F"];

let randomElement = Math.floor(Math.random()*5);
let element = grade[randomElement];

switch (element) {
    case "A":
    case "B":
        console.log("You've received a passing grade!");
        break;
    case "C":
    case "D":
        console.log("You've passed but try harder next time");
        break;
    case "F":
        console.log("You've failed");
        break;
    default:
        console.log("I don't know your grade");
}
*/
/** Exercise 4.5 */

let prize = Number(prompt("Choose a number between 0 and 10"));

let selection = `My selection ${prize}`;

switch (prize) {
    case 0:
        console.log(`My selection: ${prize}`);
        break;
    case 1:
        console.log(`My selection: ${prize}`);
        break;
    case 2:
        console.log(`My selection: ${prize}`);
        break;
    case 3:
        console.log(`My selection: ${prize}`);
        break;
    case 4:
        console.log(`My selection: ${prize}`);
        break;
    case 5:
        console.log(`My selection: ${prize}`);
        break;
    case 6:
        console.log(`My selection: ${prize}`);
        break;
    case 7:
        console.log(`My selection: ${prize}`);
        break;
    case 8:
        console.log(`My selection: ${prize}`);
        break;
    case 9:
        console.log(`My selection: ${prize}`);
        break;
    case 10:
        console.log(`My selection: ${prize}`);
        break;
    default:
        console.log('You probably don\'t have a prize');
        break;
}
/*
switch (prize) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
        console.log(selection);
        break;
    default:
        console.log('You probably don\'t have a prize');
        break;
}
*/