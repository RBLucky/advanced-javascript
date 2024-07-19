let myTable = [];

let numm = 10;

for(let x=0; x<numm; x++){
    let temp = [];

    for(let y = 0; y<numm; y++){
    temp.push(x*y);
    }

    myTable.push(temp);
}

console.table(myTable);