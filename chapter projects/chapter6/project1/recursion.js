"use strict";

let recursion = function count(i) {
    console.log(i);

    if (i < 10) {
        return count(i + 1);
    }

    return;
}

recursion(5);