"use strict";

// console.dir(document.body);

// console.dir(document.body.children.forest.children.tree2.children.shrubbery.children.treasure);

// console.dir(document.body.childNodes[3].childNodes[3].childNodes[1].childNodes[1]);

// console.dir(document.body.children.forest.children.tree2.parentElement);
// console.dir(document.body.children.forest.children.tree2);
// console.dir(document.body.children.forest.children.tree2.previousElementSibling);
// console.dir(document.body.children.forest.children.tree1.nextElementSibling);

/** Exercise 10.1 */
/*
console.dir(document);

console.log(document.body.children[0]);
console.log(document.body.children[1]);
console.log(document.body.children[1].children[0]);
console.log(document.body.children[1].children[1]);
console.log(document.body.children[1].children[2]);
console.log(document.body.children[1].children[3]);
console.log(document.body.children[2]);
*/

/** Exercise 10.2 */
/*
let blue = document.getElementById('blue');

console.log(blue);
/*
/** Exercise 10.3 */
/*
let divs = document.getElementsByTagName('div');

console.log(divs[3]);
*/
/** Exercise 10.4 */
/*
let color = document.getElementsByClassName('color');

for (let i = 0; i < color.length - 1; ++i) {
    console.log(color[i]);
}
*/
/** Exercise 10.5 */
/*
let first = document.querySelector('.color');

console.log(first);
*/
/** Exercise 10.6 */
/*
let all = document.querySelectorAll('.color');

console.log(all);

for (let i = 0; i < all.length; ++i) {
    console.log(all[i]);
}
*/
/** Exercise 10.7 */
/*
function message(x) {
    console.dir(x.textContent)
}
*/

/** Exercise 10.8 */
/*
let names = ["Brenda", "Felicia", "Steve", "Sipho", "Herman", "Lindi", "Thapelo"];

let message = document.getElementById('message');
let output = document.getElementById('output');

build();

function build() {
    let html = "<h1>My Friends Table</h1><table>";

    names.forEach((item, index) => {
        html += `<tr class="box" data-row="${index+1}" data-name="${item}" onclick="getData(this)"> <td>${item}</td>`;
        html +=  `<td >${index + 1}</td></tr>`;
    });

    html += "</table>";
    document.getElementById("output").innerHTML = html;
}

function getData(x) {
    let temp = x.getAttribute("data-row");
    let tempName = x.getAttribute("data-name");
    message.innerHTML = `${tempName } is in row #${temp}`;
 }
*/

/** Exercise 10.9 */
/*
let buttons = document.querySelectorAll('button');

console.log(buttons);

buttons.forEach((button) => {
    function output() {
        console.log(this.textContent);
    }

    button.addEventListener("click", output);
});
*/

/** Exercise 10.10 */

let addNew = document.getElementById("addNew").onclick;

addNew = function () {
    addOne();
}

function addOne() {
    var a = document.getElementById("addItem").value;
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(a));
    document.getElementById("sList").appendChild(li);
}