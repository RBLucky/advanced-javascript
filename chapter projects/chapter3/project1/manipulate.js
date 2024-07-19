"use strict";

const theList = ['Laurence', 'Svekis', true, 35, null, undefined, {test: 'one', score: 55}, ['one', 'two']];
console.log(theList);

theList[0] = "FIRST";
console.log(theList);

//remove last item
theList.pop();
console.log(theList);

//assign hello world
theList.splice(2, 5, "hello World");
console.log(theList);

//add "MIDDLE"
theList.splice(2, 0, "MIDDLE");
console.log(theList);

//add "LAST" to last index
theList.push("LAST");
console.log(theList);
