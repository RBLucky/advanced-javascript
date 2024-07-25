"use strict";

let elements = document.querySelector(".holder");

elements.addEventListener("mouseover", (e) => {
    e.target.classList.add("active");
});

elements.addEventListener("mouseout", (e) => {
    e.target.classList.remove("active");
});

elements.addEventListener("mousemove", coordin);

function coordin() {
    let html = `x: ${event.clientX} | y: ${event.clientY}`;
    document.getElementById("output").innerHTML = html;
}