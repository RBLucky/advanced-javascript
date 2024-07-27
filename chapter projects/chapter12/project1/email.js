"use strict";

let area1 = document.querySelector("textarea[name='textarea']");
let area2 = document.querySelector("textarea[name='textarea2']");

document.querySelector("button").addEventListener("click", lookUp);

function lookUp() {
    let rawText = area1.value;
    let email = rawText.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
    let holder = [];

    for (let i = 0; i < email.length; ++i) {
        if (holder.indexOf(email[i]) === -1) {
            holder.push(email[i]);
        }
    }
    area2.value = holder.join(',');
}