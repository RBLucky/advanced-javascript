/*
// Create three people objects from the person 
// class and print their names to the console.
// (5 points)
*/
class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
}

let person1 = new Person("Pete", "Moyo");
let person2 = new Person("Margret", "Thatcher");
let person3 = new Person("Lacy", "Jones");


/*
Create a Car class with a contructor for 
properties make, model and year. 
Create two cars from this class and print 
their information.
Try giving it a drive() method that prints 
"Driving my " + this.make + " car";
(5 points)
*/

class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    drive() {
        let output = "Driving my" + this.make + " car.";
        console.log(output);
    }
}

let car1 = new Car("Volkswagen", "Golf", 2016);
let car2 = new Car("Volvo", "XC40", 2021);

console.log(car1);
console.log(car2);


/*
From this array below create a prompt that ask for 
a person's name. Create and call a function that
accepts a name and loops through your 
guests array list using a for of loop to return  
if the person is a guest or not. Use an alert 
to display the result.
(5 points)
*/

let guests = ["Pete", "Margret", "Lacy", "Karl", "Rosanne"];

let guestName = prompt("What is your name? ");

function isGuest(name) {

    for (let element of guests) {
        if (guests.includes(name)) {
            return alert("You are a guest. Welcome!");
        } else {
            return alert("Sorry, but you are not a guest.");
        }
    }
}

isGuest(guestName);


