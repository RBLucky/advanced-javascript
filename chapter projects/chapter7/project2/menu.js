"use strict";

class Menu {
    #price1 = 20;
    #price2 = 50;

    constructor (item1 = 1, item2 = 1) {
        this.item1 = item1;
        this.item2 = item2;
    }

    calculate() {
        return (this.item1 * this.#price1) + (this.item2 * this.#price2);
    }

    get total() {
        return this.calculate();
    }
}

let order1 = new Menu(3,4);
let order2 = new Menu(6,4);
let order3 = new Menu(2,1);

console.log(order1.total);
console.log(order2.total);
console.log(order3.total);