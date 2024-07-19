"use strict";
/*
let i = 0;

while (i < 10) {
    console.log(i);
    i++;
}

let someArray = ["Mike", "Antal", "Marc", "Emir", "Louiza", "Jacky"];
let notFound = true;

while (notFound && someArray.length > 0) {
    if (someArray[0] === "Louiza") {
        console.log("Found her!");
        notFound = false;
    } else {
        someArray.shift();
    }
}


let nr1 = 0;
let nr2 = 1;
let tmp;

let fibonacciArray = [];

while (fibonacciArray.length < 25) {
    fibonacciArray.push(nr1);
    tmp = nr1 + nr2;
    nr1 = nr2;
    nr2 = tmp;
}

console.log(fibonacciArray);
*/
/** Exercise 5.1 */
/*
let number = Math.floor(Math.random()*20);

let correct = false;

while (correct === false) {
    let guess = Number(prompt("Guess a number between 0 & 20"));
    if (guess === number) {
        correct = true;
        alert("Correct! Well done!");
        break;
    }
    guess > number ? alert("Your guess is high, go lower") : alert("Your guess is too low, go higher");
    alert("That's not it :(\nTry again.");
}


let number;

do {
    number = Number(prompt("Please enter a number between 0 and 100: "));
} while (!(number >= 0 && number < 100));
 */

/** Exercise 5.2 */
/*
let counter = 0;
let step = counter += 1;

do {
    console.log(counter);
    counter = step;
} while (counter <= 100);
 

for (let i = 0; i < 10 ; ++i) {
    console.log(i);
}


let arr = [];
for (let i = 0; i < 100; ++i) {
    arr.push(i);
}

console.log(arr);


let arr = [];
for (let i = 0; i < 100; i += 2) {
    arr.push(i);
}
console.log(arr);
*/

/** Exercise 5.3 */
/*
let myWork = [];

for (let i = 0; i < 10; ++i) {
    let status = i % 2 ? true : false;
    let lessons = {
        name: `Lesson ${i}`,
        status: status
    };

    myWork.push(lessons);
}

console.log(myWork);


let arrOfArrays = [];

for (let i = 0; i < 3; ++i) {
    arrOfArrays.push([]);

    for (let j = 0; j < 7; ++j) {
        arrOfArrays[i].push(j);
    }
}

console.log(arrOfArrays);
console.table(arrOfArrays);
*/

/** Exercise 5.4 */
/*
let myTable = [];

let rows = 6;
let columns = rows;

let counter = 0;

for (let i = 0; i < rows; ++i) {
    let tempTable = [];

    for (let j = 0; j < columns; ++j) {
        counter++;
        tempTable.push(counter);
    }
    myTable.push(tempTable);
}

console.table(myTable);


let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];

for (let i = 0; i < names.length; ++i) {
    console.log(names[i]);
}
*/

/** Exercise 5.5 */
/*
let grid = [];
let cells = 64;
let counter = 0;

let row;

for (let i = 0; i < cells + 1; ++i) {
    if (counter % 8 === 0) {
        if (row) {
            grid.push(row);
        }
        row = [];
    }

    counter++;

    let temp = counter;
    row.push(temp);
}

console.table(grid);


let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];

for (let name of names) {
    console.log(name);
}
*/
/** Exercise 5.6 */
/*
let array = [];
let value = 0;

for (let i = 0; i < 10; ++i) {
    array.push(value);
    value++;

}
console.log(array);

for (let i = 0; i < 10; ++i) {
    console.log(array[i]);
}
console.log(" \n ");
for (let index of array) {
    console.log(index);
}
*/

/** Exercise 5.7 */
/*
let lesson = {
    subject: "Maths",
    time: "9am",
    teacher: "Nelson Mandela"
}

for (let property in lesson) {
    console.log(property, ":", lesson[property]);
}

let array = [];


for (let property in lesson) {
    array.push(property);
}

console.log(array);

for (let index in array) {
    console.log(array[index]);
}
*/
/** Exercise 5.8 */

let string = "";

let skip = 7;

for (let i = 1; i < 11; ++i) {
    if (i === skip) {
        continue;
    }
    string += `${i}, `;
}

console.log(string);