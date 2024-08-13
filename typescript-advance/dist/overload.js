"use strict";
function sayHi(name) {
    if (!name) {
        return "Hello TypeScript";
    }
    if (typeof name == "string") {
        return `Hello ${name}`;
    }
    throw new Error("DataType is incorrect");
}
console.log(sayHi());
console.log(sayHi("Off"));
function total(a, b) {
    if (typeof a == "number" && typeof b == "number") {
        return a + b;
    }
    if (typeof a == "string" && typeof b == "string") {
        return parseInt(a) + parseInt(b);
    }
    throw new Error("DataType is incorrect");
}
console.log(total(100, 200));
console.log(total("100", "200"));
