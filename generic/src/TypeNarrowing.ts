//TypeOf Guards
function truncate(value: string | number, length: number) {
    if (typeof value === "number") {
        return value.toString().slice(0, length)
    }
    return value.slice(0, length)
}

console.log(truncate("Kong", 2))
console.log(truncate(12345, 2))

//Equality Narrowing
function compareValue(x: string | number, y: string | number) {
    if (x === y) {
        console.log("Equal Value")
    } else {
        console.log("Difference Value")
    }
}
compareValue(3, "3")

//Insatndof Narrowing
class User {
    constructor(public username: string) { }
}

class Employee {
    constructor(public name: string) { }
}

function printObject(obj: Employee | User) {
    if (obj instanceof Employee) {
        console.log("As object from Employee")
    } else {
        console.log("As object from User")
    }
}

printObject(new User("Kong"))

//Discriminated Ubions
interface Rectangle {
    width: number,
    height: number,
    type: "rectangle"
}interface Triangle {
    base: number,
    height: number,
    type: "triangle"
}
type Shape = Rectangle | Triangle
function calculateArea(s: Shape) {
    switch (s.type) {
        case "rectangle": return s.width*s.height
        case "triangle": return 0.5*s.base*s.height
        default: return new Error("Error")
    }
}
calculateArea({width:20,height:20,type:"rectangle"})
