"use strict";
//Union Type
let age2;
age2 = 50;
age2 = "Off";
age2 = true;
console.log(age2);
let coordinates;
coordinates = { x: 5, y: 10 };
coordinates = { lat: 50, long: 500 };
//Function
function sayHi(person) {
    if (typeof person === "string") {
        console.log(`Hello ${person}`);
    }
    else {
        person.forEach((element) => { console.log(`Hello ${element}`); });
    }
}
sayHi("Off");
sayHi(["B", "C"]);
