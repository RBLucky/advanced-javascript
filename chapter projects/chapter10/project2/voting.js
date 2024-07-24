"use strict";

document.addEventListener('DOMContentLoaded', build);

let myArray = ["Brenda", "Felicia", "Steve", "Sipho", "Herman", "Lindi", "Thapelo"];

let message = document.getElementById('message');
let addFriend = document.getElementById('addFriend');
let addnew = document.getElementById('addNew');
let output = document.getElementById('output');

addNew.onClick = function () {
    let input = addFriend.value;

    addToList(input, myArray.length, 0);
    myArray.push(input);
}

function build() {
    myArray.forEach((item, index) => {
        addToList(item, index, 0);
    });
}

function addToList(input, index, counter) {
    let row = document.createElement("tr");
    let firstCell = document.createElement("td");

    firstCell.classList.add("box");

    firstCell.textContent = index + 1;

    const secondCell = document.createElement("td");
    const thirdCell = document.createElement("td");

    secondCell.textContent = input;
    thirdCell.textContent = counter;

    row.append(firstCell);
    row.append(secondCell);
    row.append(thirdCell);

    row.onclick = function () {
        console.log(row.lastChild);
        let val = Number(row.lastChild.textContent);
        val++;
        row.lastChild.textContent = val;
    }
    output.appendChild(row);
}
