"use strict";
//TypeOf Guards
function truncate(value, length) {
    if (typeof value === "number") {
        return value.toString().slice(0, length);
    }
    return value.slice(0, length);
}
console.log(truncate("Kong", 2));
console.log(truncate(12345, 2));
//Equality Narrowing
function compareValue(x, y) {
    if (x === y) {
        console.log("Equal Value");
    }
    else {
        console.log("Difference Value");
    }
}
compareValue(3, "3");
//Insatndof Narrowing
class User {
    constructor(username) {
        this.username = username;
    }
}
class Employee {
    constructor(name) {
        this.name = name;
    }
}
function printObject(obj) {
    if (obj instanceof Employee) {
        console.log("As object from Employee");
    }
    else {
        console.log("As object from User");
    }
}
printObject(new User("Kong"));
function calculateArea(s) {
    switch (s.type) {
        case "rectangle": return s.width * s.height;
        case "triangle": return 0.5 * s.base * s.height;
        default: return new Error("Error");
    }
}
calculateArea({ width: 20, height: 20, type: "rectangle" });
