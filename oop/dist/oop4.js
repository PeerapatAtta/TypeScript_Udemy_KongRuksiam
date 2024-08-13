"use strict";
class Employee4 {
    //Constructor > Define property in constructor
    constructor(name, department, salary) {
        this.name = name;
        this.department = department;
        this.salary = salary;
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
class IT4 extends Employee4 {
    constructor(name, salary) {
        super(name, "IT", salary);
        this.income = salary;
    }
    info() {
        console.log("Acting as IT Support");
    }
    reportIncome() {
        console.log(`Year Income = ${this.income * 12}`);
    }
}
class Accounting4 extends Employee4 {
    constructor(name, salary) {
        super(name, "Accouting", salary);
        this.income = salary;
    }
    info() {
        console.log("Acting as Accouting");
    }
    reportIncome() {
        console.log(`Year Income = ${this.income * 12}`);
    }
}
//Object
const emp6 = new IT4("A", 10000);
const emp7 = new Accounting4("B", 20000);
//
emp6.info();
emp6.reportIncome();
emp7.info();
emp7.reportIncome();
