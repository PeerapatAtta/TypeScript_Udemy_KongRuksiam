//SuperClass
class Employee2 {
    //Property
    protected companyName:string = "ABC ltd."
    //Constructor > Define property in constructor
    constructor(public name: string, private department: string, private salary: number) {

    }
    public showDetail() {
        console.log(`Name= ${this.name},Department=${this.department},Salary=${this.salary}`)
    }
    //Get Method
    get Salary(): number {
        return this.salary
    }
    //Set Method
    set Salary(newSalary: number) {
        this.salary = newSalary;
    }
}
//SubClass
class IT extends Employee2 {
    constructor(name: string, salary: number) {
        super(name, "IT", salary)
        console.log(`Company Name = ${this.companyName}`)
    }
}
class Accounting extends Employee2 {
    constructor(name: string, salary: number) {
        super(name, "Accouting", salary)
    }
}
//object
const emp2 = new IT("A", 10000)
const emp3 = new Accounting("B", 20000)
//Use
console.log(emp2)
console.log(emp3)



