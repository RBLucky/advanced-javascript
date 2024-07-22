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
let uri = decodeURIComponent("How's%20it%20going%3F");
console.log(uri);

let encoded_uri = "How's it going?";
console.log(encodeURIComponent(encoded_uri));

let web_uri = 'http://www.basescripts.com?=Hello World";';
console.log(encodeURIComponent(web_uri));

