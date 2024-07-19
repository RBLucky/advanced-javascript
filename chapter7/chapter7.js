"use strict";

/** As a function */
// function Dog(dogName, weight, color, breed) {
//     this.dogName = dogName;
//     this.weight = weight;
//     this.color = color;
//     this.breed = breed;
//    }
//    let dog = new Dog("Jacky", 30, "brown", "labrador");

/** As a class */
/*
class Dog {
    constructor(dogName, weight, color, breed) {
        this.dogName = dogName;
        this.weight = weight;
        this.color = color;
        this.breed = breed;
    }
}
*/
/** Object */
/*
let dog = new Dog("Jacaranda", 2.4, "brown", "chihuahua");

console.log(dog.dogName, " is a", dog.breed, " and weighs", dog.weight, "kg.");
*/

/** Exercise 7.1 */
/*
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greet() {
        console.log("Hi there! I'm", this.firstName);
    }

    compliment(name, object) {
        return `That's a nice ${object}, ${name}`
    }
}

let newPerson = new Person("Lucky", "Nkosi");
let friend = new Person("Nelson", "Mandela");

console.log(`Hello, ${newPerson.firstName} ${newPerson.lastName} and ${friend.firstName} ${friend.lastName}`);
newPerson.greet();

let compliment = newPerson.compliment(newPerson.firstName, "hat");
console.log(compliment);
*/

/** Exercise 7.2 */
/*
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    fullname() {
        return `${this.firstName} ${this.lastName}`;
    }
}

let person1 = new Person("Nelson", "Mandela");
let person2 = new Person("Winnie", "Mandela");

let fullName = person1.fullname();
let fullName2 = person2.fullname();

console.log(fullName);
console.log(fullName2);
*/

/*
// Parent Class
class Vehicle {
    cosntructor(color, currentSpeed, maxSpeed) {
        this.color = color;
        this.currentSpeed = currentSpeed;
        this.maxSpeed = maxSpeed;
    }
    move() {
        console.log("moving at", this.currentSpeed);
    }
    accelerate(amount) {
        this.currentSpeed += amount;
    }
}

class Motorcycle extends Vehicle {
    constructor(color, currentSpeed, maxSpeed, fuel) {
        super(color, currentSpeed, maxSpeed);
        this.fuel = fuel;
    }
    doWheelie() {
        console.log("Driving on one wheel!");
    }
}

let motor = new Motorcycle("Black", 0, 250, "gasoline");
console.log(motor.color);
motor.accelerate(50);
motor.move();
console.log(motor.color);
*/
/*
class Vehicle {
    constructor(color, currentSpeed, maxSpeed) {
        this.color = color;
        this.currentSpeed = currentSpeed;
        this.maxSpeed = maxSpeed;
    }
    move() {
        console.log("moving at", this.currentSpeed);
    }
    accelerate(amount) {
        this.currentSpeed += amount;
    }
}

//SUBCLASS
class Motorcycle extends Vehicle {
    constructor(color, currentSpeed, maxSpeed, fuel) {
        super(color, currentSpeed, maxSpeed);//inherit all the parent claas fields
        this.fuel = fuel;
    }
    doWheelie() {
        console.log("Driving on one wheel!");
    }
}

let motor = new Motorcycle("Black", 0, 250, "gasoline");
console.log(motor.color);
motor.accelerate(50);
motor.move();
*/

/** Exercise 7.3 */

class Animal {
    constructor(species, sounds) {
        this.species = species;
        this.sounds = sounds;
    }
    speak() {
        console.log(`The ${this.species} says ${this.sounds}`);
    }
}

Animal.prototype.slither = function () {
    return `The ${this.species} is slithering.`;
}

let cow = new Animal("cow", "moo");
let snake = new Animal("snake", "hiss");

cow.speak();

console.log(snake.slither());
console.log(snake);