"use strict";

let UlStars = document.querySelector(".stars");
let output = document.querySelector(".output");
let stars = document.querySelectorAll(".star");

stars.forEach((star, index) => {
    star.starValue = (index + 1);
    star.addEventListener("click", rate);
});

function rate(e) {
    output.innerHTML = `You Rated this ${e.target.starValue} stars`;

    stars.forEach((star, index) => {
        if (index < e.target.starValue) {
            star.classList.add("orange");
        } else {
            star.classList.remove("orange");
        }
    });
    
}