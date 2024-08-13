//Normal
const user1: string = "A";
const user2: string = "B";

//Array
//New
const users: string[] = [];
const users2: string[] = ["A", "B"];
//function
users.push("A");
users.push("B");

//Use
console.log(users);

//Access Array
users[0] = "AA";

for (let i = 0; i < users.length; i++) {
    console.log(users[i])
}

users.forEach(element => {
    console.log(element)
});

//Alias
type Employee4 = {
    name: string,
    salary: number,
    department?: string
}
const employees: Employee4[] = []
employees.push({
    name: "A",
    salary: 10000,
    department: "Programer"
})
employees.push({
    name: "B",
    salary: 20000,
    department: "Sale"
})
//console.log(employees)

for (let person of employees) {
    console.log(person)
}

