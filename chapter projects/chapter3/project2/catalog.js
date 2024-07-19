"use strict";

let inventory = [];
console.log(inventory);

let car1 = {
    name: "VW",
    model: "MK6",
    cost: 250000,
    quantity: 10
}
let car2 = {
    name: "BMW",
    model: "M3",
    cost: 300000,
    quantity: 7
}
let car3 = {
    name: "Toyota",
    model: "Quantum",
    cost: 200000,
    quantity: 4
}

inventory.push(car1, car2, car3);
console.log(inventory)

console.log(inventory[2].quantity);