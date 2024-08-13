//New 
type Employee = {
    id: number,
    name: string,
    salary: number,
    phone: string,
}

//Use
let emp1: Employee = {
    id: 1,
    name: "A",
    salary: 10000,
    phone: "087-1111-1111",
}

console.log(emp1);
emp1.id = 2;
console.log(emp1);

//Optional Property => ?
type Employee2 = {
    id: number,
    name: string,
    salary: number,
    phone?: string,
}
let emp2: Employee2 = {
    id: 1,
    name: "A",
    salary: 10000,
}
console.log(emp2);

//ReadOnly Modifier => readonly
type Employee3 = {
    readonly id: number,
    name: string,
    salary: number,
    phone: string,
}



