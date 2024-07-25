"use strict";

let track = [];

let container = document.querySelector('.container');

container.addEventListener("click", (e) => {
    if (e.target.id) {
        let values = {
            "Text Content": e.target.textContent,
            id: e.target.id,
            Tag: e.target.tagName,
            Class: e.target.className
        }

        track.push(values);

        console.log(track)
    }
})