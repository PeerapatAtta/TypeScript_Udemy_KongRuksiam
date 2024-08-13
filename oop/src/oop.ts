//class
class Employee {
    //Property
    public name: string;
    readonly department: string;
    private salary: number;
    //Constructor
    constructor(name: string, department: string, salary: number) {
        this.name = name;
        this.department = department;
        this.salary = salary;
    }
    public showDetail() {
        console.log(`Name= ${this.name},Department=${this.department},Salary=${this.salary}`)
    }
    //Get Method
    public getSalary() {
        return this.salary;
    }
    get Salary(): number {
        return this.salary
    }
    //Set Method
    public setSalary(newSalary: number) {
        this.salary = newSalary;
    }
    set Salary(newSalary: number) {
        this.salary = newSalary;
    }
}
//object
const emp1 = new Employee("A", "IT", 50000)
//Use
console.log(emp1)
emp1.name = "B"
console.log(emp1.name)
emp1.showDetail()
emp1.setSalary(70000)
emp1.showDetail()
console.log(emp1.getSalary())
//set
emp1.Salary = 80000
emp1.showDetail()
console.log(emp1.Salary)


