"use strict";
//SuperClass
class Employee2 {
    //Constructor > Define property in constructor
    constructor(name, department, salary) {
        this.name = name;
        this.department = department;
        this.salary = salary;
        //Property
        this.companyName = "ABC ltd.";
    }
    showDetail() {
        console.log(`Name= ${this.name},Department=${this.department},Salary=${this.salary}`);
    }
    //Get Method
    get Salary() {
        return this.salary;
    }
    //Set Method
    set Salary(newSalary) {
        this.salary = newSalary;
    }
}
//SubClass
class IT extends Employee2 {
    constructor(name, salary) {
        super(name, "IT", salary);
        console.log(`Company Name = ${this.companyName}`);
    }
}
class Accounting extends Employee2 {
    constructor(name, salary) {
        super(name, "Accouting", salary);
    }
}
//object
const emp2 = new IT("A", 10000);
const emp3 = new Accounting("B", 20000);
//Use
console.log(emp2);
console.log(emp3);
