"use strict"

/*let singleString = 'Hi there!';
let doubleString = "How are you?";

console.log(singleString);
console.log(doubleString);

let funActivity = "Let's learn JavaScript";
console.log(funActivity);

let language = "JavaScript";
let message = `Let's learn ${language}`;

console.log(message);

let str = "Hello, what's your name? Is it \"Mike\"?";
console.log(str);

let str2 = `Hello, what\'s your name? Is it "Mike"?`;
console.log(str2);

let str3 = "New \nline.";
let str4 = "I'm containing a backslash: \\!";
console.log(str3);
console.log(str4);*/

let intNr = 1; // Whole number
/*let decNr = 1.5; // Decimal
let expNr = 1.4e15; // Exponential number
let octNr = 0o10; //decimal version would be 8
let hexNr = 0x3E8; //decimal version would be 1000
let binNr = 0b101; //decimal version would be 5*/

/*console.log(intNr);
console.log(intNr);
console.log(decNr);
console.log(expNr);
console.log(octNr);
console.log(hexNr);
console.log(binNr);

let intNr2 = 3434;
let intNr3 = -111;
let decNr2 = 45.78;
let binNr2 = 0b100;

console.log(intNr2);
console.log(intNr3);
console.log(decNr2);
console.log(binNr2);*/

/** Big Int */
// let bigNr = 90071992547409920n;
// console.log(bigNr);
// 
// let result = bigNr + intNr;
// console.log(result);

/** Booleans */
/*let bool1 = false;
let bool2 = true;

let lightIsOn = true;

let random = Math.floor(Math.random()*2);
console.log(random);

if (lightIsOn == random) {
    console.log("The light is on!");
} else {
    console.log("The light is off!");
}
    
lightIsOn == random ? console.log("The light is on!"): "The light is off!"; */

/** Symbols */
/*let str1 = "JavaScript is fun!";
let str2 = "JavaScript is fun!";

console.log("These two strings are the same:", str1 === str2);

let sym1 = Symbol("JavaScript is fun!");
let sym2 = Symbol("JavaScript is fun!");
console.log("These two Symbols are the same:", sym1 === sym2);*/

/** Undefined & null */

/*let terribleThingToDo = undefined;
let lastName;

console.log("Same undefined:", lastName === terribleThingToDo);

let betterOption = null;
console.log("Same null:", lastName === betterOption);*/

/** typeof */
/*let str = "Hello";
let nr = 7;
let bigNr = 12345678901234n;
let bool = true;
let sym = Symbol("unique");
let undef = undefined;
let unknown = null;

console.log("str: ", typeof(str));
console.log("nr: ", typeof(nr));
console.log("bigNr: ", typeof(bigNr));
console.log("bool: ", typeof(bool));
console.log("sym: ", typeof(sym));
console.log("undef: ", typeof(undef));
console.log("unknown: ", typeof(unknown));*/

/** Conversion */
/*let nr1 = 2;
let nr2 = Number("2");
let nr = "2";

console.log("Not converted: " + (nr + nr1));
console.log("converted: " + (nr1 + nr2));

let nrToStr = 6;
nrToStr = String(nrToStr);
console.log(`nrToStr (${nrToStr}) is a ${typeof(nrToStr)}`);
let strToNr = "12";
strToNr = Number(strToNr);
console.log(`strToNr (${strToNr})is a  ${typeof(strToNr)}`);
let strToBool = "any string will return true";
strToBool = Boolean(strToBool);
console.log(`strToBool (${strToBool}) is a ${typeof(strToBool)}`);*/

/** Exercise 2.1*/
/*let str1 = 'Laurence';
let str2 = "Svekis";
let val1 = undefined;
let val2 = null;
let myNum = 1000;

console.log(`"str1" (${str1}) is a ${typeof(str1)}`)
console.log(`"str2" (${str2}) is also a ${typeof(str2)}`)
console.log(`"val1" (${val1}) is ${typeof(val1)}`)
console.log(`"val2" (${val2}) is an ${typeof(val2)}`)
console.log(`"myNum" (${myNum}) is a ${typeof(myNum)}`)*/

/** Operators */
// Exercise 2.2

/*let myName = "Lucky";
let age = 23;
let canCodeJS = true;

console.log(`Hello my name is ${myName}, I am ${age} years old and I can code JavaScript: ${canCodeJS} (kinda)`)
*/

/** Exercise 2.3 */
/*let a = prompt("What is the length of a? ");
let b = prompt("What is the length of b? ");

let hyp = Number(a**2) + Number(b**2);

let c = Math.sqrt(hyp);

alert(`The length of the hypotenuse (c) is ${c}`);*/

/** Exercise 2.4 */
/*let a = 1;
let b = 2;
let c = 3;

console.log(`a is ${a}, b is ${b} and c is ${c}`);
console.log(`Adding a (${a}) to b (${b}) gives us ${a+b}`);
console.log(`Dividing a (${a}) by c (${c}) gives us ${a/c}`);
console.log(`Replacing c (${c}) with the modulus of c and b gives us ${c=c%b}`);
*/

/*let x = 5;
let y = "5";

console.log(`x is ${x} (number)`);
console.log(`y is "${5}" (string)`);
console.log(`x == y is ${x == y}`);
console.log(`x === y is ${x === y}`);

console.log(`x != y is ${x != y}`);
console.log(`x !== y is ${x !== y}`);*/

/*let x = 5;
let y = 6;

console.log(y>x);
console.log(x>y);
console.log(y>y);
console.log(y>=y);
console.log(y<x);*/

/** Logical Operators */

//&&
let x = 1;
let y = 2;
let z = 3;

console.log(x<y && y <z);
console.log(x>y && y<z);

// ||
console.log(x>y || y<z);
console.log(x>y || y>z);

// !
x = false;
console.log(`!x (!${x}) is ${!x}`);
console.log("");

x = 1;
console.log(!(x<y));

