"use strict";
/*
let uri = "https://www.example.com/submit?name=maaike van putten";

let encoded_uri = encodeURI(uri);

console.log("Encoded: ", encoded_uri);

let decoded_uri = decodeURI(encoded_uri);
console.log("Decoded: ", decoded_uri);

let encoded_uri = encodeURIComponent(uri);
console.log("Encoded:", encoded_uri);
let decoded_uri = decodeURIComponent(encoded_uri);
console.log("Decoded:", decoded_uri);
*/
/** Exercise 8.1 */
/*
let uri = decodeURIComponent("How's%20it%20going%3F");
console.log(uri);

let encoded_uri = "How's it going?";
console.log(encodeURIComponent(encoded_uri));

let web_uri = 'http://www.basescripts.com?=Hello World";';
console.log(encodeURIComponent(web_uri));
*/
/*
let arr = ["grapefruit", 4, "hello", 5.6, true];

function printStuff(element, index) {
 console.log("Printing stuff:", element, "on array position:", index);
}

arr.forEach(printStuff);
*/
/*
let arr = ["squirrel", 5, "Tjed", new Date(), true];

function checkString(element, index) {
 return typeof element === "string";
}

let filterArr = arr.filter(checkString);
console.log(filterArr);
*/
/*
let arr = ["grapefruit", 4, "hello", 5.6, true];
console.log(arr);
arr.copyWithin(0, 3, 5);
console.log(arr);


let arr = [1, 2, 3, 4];
console.log(arr);
let mapped_arr = arr.map(x => x + 1);
console.log(mapped_arr);
*/

/** Exercise 8.2 */
/*
let arr = ["Laurence", "Mike", "Larry", "Kim", "Joanne", "Laurence", "Mike","Laurence", "Mike", "Laurence", "Mike"];
console.log(arr);

let filterArr = arr.filter(function(element, index, array) {
    return array.indexOf(element) === index;
});

console.log(filterArr);
*/

/** Exercise 8.3 */
/*
let numArr = [6, 1, 9, 3, 5, 4, 2, 0];

let mapArr = numArr.map(function (x) {
    return x*2;
})

console.log(mapArr);


let s1 = "Hello ";
let s2 = "JavaScript";
let result = s1.concat(s2);
console.log(result);
console.log(s1);
console.log(s2);
*/
/*
let result = "Hello JavaScript";

let arr_result = result.split(" ");
console.log(arr_result);

console.log(arr_result.join(" "));

let poem = "Roses are red, violets are blue, if I can do JS, then you can too!";

let index_re = poem.indexOf("re");
console.log(index_re);

let indexNotFound = poem.indexOf("python");
console.log(indexNotFound);
*/

/** Exercise 8.4 */

let original = "thIs will be capiTalized for each word";

function capitalize(string) {
    string = string.toLowerCase();

    let temp = [];

    let words = string.split(" ");
    console.log(words);
    
    words.forEach(function (word) {
        let new_words = word.slice(0, 1).toUpperCase() + word.slice(1);
        //return console.log(new_words);
        temp.push(new_words);
    });
    return temp;
}

console.log(capitalize(original));