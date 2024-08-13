"use strict";
//Use
let person4;
person4 = {
    name: "A",
    age: 30,
    gender: "male",
    info() {
        console.log(`Latest Data = ${new Date().toLocaleString()}`);
    },
    title: "Mr",
    income: 20000,
    address: "BKK"
};
person4.age = 40;
console.log(person4);
person4.info();
let person5 = {
    name: "A5",
    age: 30,
    gender: "male",
    info() {
        console.log(`Latest Data = ${new Date().toLocaleString()}`);
    },
    title: "Mr",
    income: 20000,
    address: "BKK"
};
console.log(person5);
//Type vs Interface
