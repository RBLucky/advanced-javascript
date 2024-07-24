"use strict";

// document.getElementById("unique").onclick = function() { magic(); };

// function magic() {
//     alert("Abra cadabra!");
// }

/** Exercise 11.1 */
/*
let light = true;
let button = document.querySelector('button');
let heading = document.querySelector('h1');
let text = document.getElementById('text');

document.addEventListener('DOMContentLoaded', changeMode());

function changeMode() {
    if (light) {
        button.innerHTML = "Dark Mode";
        document.body.style.backgroundColor = "white";
        heading.style.color = "black";
        text.style.color = "black";
        text.innerHTML = "This is light mode";
        light = false;
    } else if (!light) {
        button.innerHTML = "Light Mode";
        document.body.style.backgroundColor = "black";
        heading.style.color = "white";
        text.style.color = "white";
        text.innerHTML = "This is dark mode";
        light = true;
    }
}
*/
/** Exercise 11.2 */
/*
let elements = document.getElementsByClassName('color');
let text = document.getElementById('text');

console.log(elements);

for (let i = 0; i < elements.length; ++i) {

    elements[i].addEventListener("click", () => {
        if (elements[i].id == "random") {
            let idx = Math.floor(Math.random() * 7);
            document.body.style.backgroundColor = elements[idx].id;
        }
    })
    console.log(elements[i].id);
    elements[i].addEventListener("click", () => {
        document.body.style.backgroundColor = elements[i].id;
        text.innerHTML = `This is ${elements[i].id}`;
    })
}
*/

/** Exercise 11.3 */

function message(string, event) {
    console.log();
    console.log();
}