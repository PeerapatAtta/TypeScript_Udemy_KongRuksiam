//SuperClass
interface IReport{
    income:number;
    reportIncome():void;
}

abstract class Employee4 {
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
    //Abtract Method
    abstract info():void
}
//SubClass
class IT4 extends Employee4 implements IReport {
    income: number;
    constructor(name: string, salary: number) {
        super(name, "IT", salary) 
        this.income = salary       
    }
    info(): void {
        console.log("Acting as IT Support")
    }
    reportIncome(): void {
        console.log(`Year Income = ${this.income*12}`)
    }
}
class Accounting4 extends Employee4 implements IReport {
    income: number; 
    constructor(name: string, salary: number) {
        super(name, "Accouting", salary)
        this.income = salary  
    }
    info(): void {
        console.log("Acting as Accouting")
    }
    reportIncome(): void {
        console.log(`Year Income = ${this.income*12}`)
    }
}
//Object
const emp6 = new IT4("A",10000)
const emp7 = new Accounting4("B",20000)
//
emp6.info()
emp6.reportIncome()
emp7.info()
emp7.reportIncome()






