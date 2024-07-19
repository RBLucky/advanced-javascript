"use strict";
/*
let arr1 = new Array("purple", "green", "yellow");
let arr2 = ["black", "orange", "pink"];

console.log(arr1);
console.log(arr2);


let arr3 = new Array(10);
let arr4 = [10];

console.log(arr3);
console.log(arr4);


let arr = ["hi there", 5, true];

for (let i = 0; i < arr.length; ++i) {
    console.log(typeof(arr[i]));
}



const arr = ["hi there"];
arr[0] = "new value";
console.log(arr[0]);

arr = ["nope, now you are overwriting the array"];
*/
/*
let cars = ["Toyota", "Renault", "Volkswagen"];

for (let i = 0; i < cars.length; ++i) {
    console.log(cars[i]);
}

console.log(cars[3]); // doesn't exist
console.log(cars[-1]);

cars[0] = "Tesla";
console.log(cars[0]);

console.log(cars);

cars[3] = "Kia";
cars[-1] = "Fiat";

console.log(cars[3]);
console.log(cars[-1]);

console.log(cars);
*/

/*
let colors = ["black", "orange", "pink"];
let booleans = [true, false, false, true];
let emptyArray = [];

console.log("Length of colors: ", colors.length);
console.log("Length of booleans: ", booleans.length);
console.log("Length of emptyArray: ", emptyArray.length);

let lastElement = colors[colors.length - 1];
console.log(lastElement);
*/
/*
let numbers = [12, 24, 36];
numbers[5] = 48;
console.log("numbers", numbers);
console.log("Length: ", numbers.length);
*/


/** Exercise 3.1 */
/*
let shoppingList = ["Milk", "Bread", "Apples"];

console.log(shoppingList);
console.log("Length: ", shoppingList.length);

for (let i = 0; i < shoppingList.length; ++i) {
    if (shoppingList[i] === "Bread") {
        shoppingList[i] = "Bananas";
    }
}

console.log(shoppingList);
*/


/** Array Methods */
/*
let favoriteFruits = ["grapefruit", "orange", "lemon"];
console.log(favoriteFruits);
favoriteFruits.push("tangerine");
console.log(favoriteFruits);

let lengthOfFavoriteFruits = favoriteFruits.push("lime");
console.log(lengthOfFavoriteFruits);
console.log(favoriteFruits);
*/
/*
let arrOfShapes = ["circle", "triangle", "rectangle", "pentagon"];
console.log(arrOfShapes);

arrOfShapes.splice(2, 0, "square", "trapezoid");
console.log(arrOfShapes);

arrOfShapes.unshift("oval");
console.log(arrOfShapes);
arrOfShapes.unshift("hexagon");
console.log(arrOfShapes);
arrOfShapes.splice(2, 12, "square", "trapezoid");
console.log(arrOfShapes);
*/

let arr5 = [1, 2, 3];
let arr6 = [4, 5, 6];
let arr7 = arr5.concat(arr6);
// console.log("Joining arr5 & arr6: ", arr7);

let arr8 = arr7.concat(7, 8, 9);
// console.log("Adding '7, 8' 9 to arr8: ", arr8);
/*
arr8.pop();
console.log("Deleting the last element(.pop()): ", arr8);

arr8.shift();
console.log("Deleting the first element(.shift()): ", arr8);

arr8.splice(1, 3) // arr.splice(index we start deleting from, no. of elements to delete)
console.log(arr8);

delete arr8[0];
console.log(arr8)

arr8 = [2, 6, 7, 8];
console.log(arr8)
let findValue = arr8.find(e => e === 6);
let findValue2 = arr8.find(e => e === 10);
console.log(findValue, findValue2);

let findIndex = arr8.indexOf(6);
let findIndex2 = arr8.indexOf(10);
console.log(findIndex, findIndex2);


let names = ["James", "Alicia", "Fatiha", "Maria", "Bert"];
console.log(names);
names.sort();
console.log(names);
console.log("Names reversed: ", names.reverse());
*/
/** Exercise 3.2 */
/*
let shoppingList = [];
shoppingList.push("Milk", "Bread", "Apples");
console.log(shoppingList);

shoppingList.splice(1, 1, "Bananas", "Eggs");
console.log(shoppingList);

console.log(shoppingList.pop());
console.log(shoppingList.sort());
console.log("Index of 'Milk':", shoppingList.indexOf("Milk"));

shoppingList.splice(1, 0, "Carrots", "Lettuce");
console.log(shoppingList);


let newList = ["Juice", "Pop"];
console.log(newList);

let list = shoppingList.concat(newList);
let concatList = list.concat(newList);
console.log(concatList);

let idx = concatList.indexOf("Pop", 7);
console.log(idx);
*/

/** Multidimensional Arrays */
/*
// 2D Array
let someValues1 = [1, 2, 3];
let someValues2 = [4, 5, 6];
let someValues3 = [7, 8, 9];

let arrOfArrays = [someValues1, someValues2, someValues3];
console.log(arrOfArrays);

let arrOfArrays2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(arrOfArrays2);

console.log(arrOfArrays[1][2]);

let arrOfArraysOfArrays = [arrOfArrays, arrOfArrays, arrOfArrays];
console.log(arrOfArraysOfArrays);

let middleValue = arrOfArraysOfArrays[1][1][1];
console.log("Middle Value: ", middleValue);
*/
/** Exercise 3.3 */
/*
let arr = [1, 2, 3];
let newArr = [arr, arr, arr];

console.log("1. ", arr);
console.log("2.", newArr);
console.log("3.", newArr[1][1]);
*/
/** Objects */
/*
let arr = [0, 1, 2];
console.log(typeof(arr));

let dog = {
    "dog name": "JavaScript",
    weight: 2.4,
    color: "brown",
    breed: "chihuahua",
    age: 3,
    "burglar biter": true,
};

console.log(dog);

let dogColour1 = dog["color"];
console.log("Bracket Notation: ", dogColour1);

let dogColour2 = dog.color;
console.log("Dot Notation: ", dogColour2);

dog["color"] = "blue";
dog.weight = 2.3;

console.log(dog);

dog.age = "three";

let variable = "age";
console.log(dog[variable]);

variable = "breed";
console.log(dog[variable]);
*/
/** Exercise 3.4 */
/*
let myCar = {
    make: "Volvo",
    model: "XC40",
    year: 2019,
    color: "brown",
    "for sale": false
};
console.log(myCar);
let variable = "color";
myCar[variable] = "silver";
console.log(myCar[variable]);
console.log(myCar);

variable = "for sale";
myCar[variable] = true;
console.log(myCar);

console.log(`Make: ${myCar.make}\n\nModel: ${myCar.model}`);
console.log(`For Sale?: ${myCar["for sale"]}`);
*/

/** Objects & Arrays */
/*
let company = { 
    companyName: "Healthy Candy",
    activity: "food manufacturing",
    address: {
    street: "2nd street",
    number: "123",
    zipcode: "33116",
    city: "Miami",
    state: "Florida"
    },
    yearOfEstablishment: 2021
};

console.log(company);

let company2 = { 
    companyName: "Healthy Candy",
    activity: ["food manufacturing", "improving kids' health", "manufacturing toys"],
    address: {
    street: "2nd street",
    number: "123",
    zipcode: "33116",
    city: "Miami",
    state: "Florida"
    },
    yearOfEstablishment: 2021
};

console.log(company2.activity);


let addresses = [{
    street: "2nd street",
    number: "123",
    zipcode: "33116",
    city: "Miami",
    state: "Florida"
    },
    {
    street: "1st West avenue",
    number: "5",
    zipcode: "75001",
    city: "Addison",
    state: "Texas"
    }];
console.log(addresses)

let streetName = addresses[0].street;
console.log("Street Name: ", streetName);


let company = { companyName: "Healthy Candy",
    activities: [ "food manufacturing",
   "improving kids' health", 
   "manufacturing toys"],
    address: [{
    street: "2nd street",
    number: "123",
    zipcode: "33116",
    city: "Miami",
    state: "Florida"
    },
    {
    street: "1st West avenue",
    number: "5",
    zipcode: "75001",
    city: "Addison",
    state: "Texas"
    }],
    yearOfEstablishment: 2021
};

let streetName = company.address[0].street;
*/


/** Exercise 3.5 */

let people = {
    friends: []
}

let friend1 = {
    "first name": "James",
    "last name": "May",
    id: 1
}

let friend2 = {
    "first name": "Jeremy",
    "last name": "Clarkson",
    id: 2
}

let friend3 = {
    "first name": "Richard",
    "last name": "Hammond",
    id: 3
}

people.friends.push(friend1, friend2, friend3);

console.log(people);


