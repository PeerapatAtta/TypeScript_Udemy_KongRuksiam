"use strict";
const person1 = {
    name: "Off",
    age: 40,
};
const person2 = {
    name: "B",
    age: 25,
};
function showDetail(data) {
    console.log(`Name = ${data.name}, Age = ${data.age}`);
}
showDetail(person1);
const showDetail2 = (data) => {
    console.log(`Name = ${data.name}, Age = ${data.age}`);
};
showDetail2(person2);
const position = {
    lat: 10,
    long: 25,
};
function randomPosition() {
    return {
        lat: Math.random(),
        long: Math.random(),
    };
}
const randomPosition2 = () => {
    return {
        lat: Math.random(),
        long: Math.random(),
    };
};
console.log(randomPosition());
console.log(randomPosition2());
//Excess Properties Check
const person3 = {
    name: "Off",
    age: 40,
    Address: "BKK"
};
showDetail(person3);
showDetail({
    name: "Off",
    age: 40,
});
