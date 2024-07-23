"use strict";

let output = document.querySelector('.output');

let mainList = output.querySelector('ul');

mainList.id = "mainList";

let div = document.querySelectorAll('div');

let arr = [];

for (let i = 0; i < div.length; ++i) {
    arr.push(div[i]);
}

console.log(arr);

for (let i = 0; i < div.length; ++i) {
    div[i].id = `id=${i + 1}`;

    if (i % 2) {
        div[i].style.color = "red";
    } else {
        div[i].style.color = "blue";
    }
    
}