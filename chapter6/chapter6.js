"Use strict";

/** Exercise 6.1 */
/*
function add(x, y) {
    return x + y;
}

console.log(add(50, 19));
console.log(add(400, 20));
*/
/** Exercise 6.2 */
/*
let compliment = ["beautiful", "gorgoeus", "very smart", "wonderful", "amazing", "great", "stunning", "awesome"];

function complimentUser(arr) {
    let fname = prompt("What is your name?");
    let idx = Math.floor(Math.random()*arr.length);
    return document.querySelector('#para').innerHTML = `Hey ${fname}, you are ${arr[idx]}. Have a great day!`;
}

complimentUser(compliment);
*/
/** Exercise 6.3 */
/*
let add = "+";
let subtract = "-";
let divide = "/";
let multiply = "*";

function calculator(x,y,operator = "+") {
    if (operator == "+" || operator == "") {
        return console.log(x + y);
    } 
    if (operator == "-") {
        return console.log(x - y);
    }
    if (operator == "/") {
        return console.log(x/y);
    }
    if (operator == "*") {
        return console.log(x*y);
    }
}

calculator(10,20);


let add = ["smooth", "operator"];
let message = ["Lucky", "is", "a", ...add, "!"];

console.log(message);
*/

/** Recursion */
/*
function recursion(limit = 10) {
    // Base case
    if (limit <= 10) {
        return console.log(limit);
    }

    //Recursive Case
    recursion(limit+1);
}

recursion(2);
*/