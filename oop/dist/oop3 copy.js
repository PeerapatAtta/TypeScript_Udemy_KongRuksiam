"use strict";
//SuperClass
class Company {
    static showData() {
        console.log("Employee Data " + this.cName);
        for (const person of this.employeeList) {
            person.showDetail();
        }
    }
}
Company.cName = "ABC ltd.";
Company.founder = "Boss";
Company.employeeList = [];
class Employee3 {
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
class IT3 extends Employee3 {
    constructor(name, salary) {
        super(name, "IT", salary);
    }
}
class Accounting3 extends Employee3 {
    constructor(name, salary) {
        super(name, "Accouting", salary);
    }
}
//Object
const emp4 = new IT3("A", 10000);
const emp5 = new Accounting3("B", 20000);
//static 
console.log(Company.cName);
Company.employeeList.push(emp4);
Company.employeeList.push(emp5);
console.log(Company.employeeList);
Company.showData();
