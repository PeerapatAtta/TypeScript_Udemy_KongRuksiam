//SuperClass
class Company {
        public static cName:string = "ABC ltd."
        public static founder:string = "Boss"
        public static employeeList:Employee3[]=[]

        static showData(){
            console.log("Employee Data "+this.cName)
            for (const person of this.employeeList) {
                person.showDetail()
            }
        }
}
class Employee3 {
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
class IT3 extends Employee3 {
    constructor(name: string, salary: number) {
        super(name, "IT", salary)        
    }
}
class Accounting3 extends Employee3 {
    constructor(name: string, salary: number) {
        super(name, "Accouting", salary)
    }
}
//Object
const emp4 = new IT3("A",10000)
const emp5 = new Accounting3("B",20000)
//static 
console.log(Company.cName)
Company.employeeList.push(emp4)
Company.employeeList.push(emp5)
console.log(Company.employeeList)
Company.showData()





