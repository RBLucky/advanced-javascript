"use strict";

class Employee {
    constructor(firstName, lastName, experience) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.experience = experience;
    }
}

let employee1 = new Employee("Sophie", "Mukunga", 17);
let employee2 = new Employee("Lungile", "Radu", 10);
let employee3 = new Employee("Sean", "Michaels", 4);

let employees = [employee1, employee2, employee3];

Employee.prototype.detail = function () {
    return `First Name: ${this.firstName}\nLast Name: ${this.lastName}\nYears at the Company: ${this.experience}`;
}

for (let i = 0; i < employees.length; ++i) {
    console.log(employees[i].detail());
}