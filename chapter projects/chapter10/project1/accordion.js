"use strict";

let title = document.querySelectorAll('.title');
let text = document.querySelectorAll('.myText');

for (let i = 0; i < title.length; ++i) {
    title[i].addEventListener("click", (e) => {
        console.log(text[i]);
        removeItem();
        text[i].classList.toggle('active');
    });
}

function removeItem() {
    for (let i = 0; i < title.length; ++i) {
        title[i].addEventListener("click", (e) => {
            text[i].classList.remove('active');
        });
    }
}