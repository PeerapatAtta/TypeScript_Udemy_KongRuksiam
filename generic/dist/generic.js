"use strict";
//Normal Function 
function getElementNumber(arr, count) {
    return arr.slice(arr.length - count);
}
function getElementString(arr, count) {
    return arr.slice(arr.length - count);
}
function getElementBoolean(arr, count) {
    return arr.slice(arr.length - count);
}
//Generic Function
function getElement(arr, count) {
    return arr.slice(arr.length - count);
}
function merge(param1, param2) {
    console.log(`${param1}-${param2}`);
}
//Parameter
const myNum = [10, 20, 30, 40, 50];
const myString = ["10", "20", "30", "40", "50"];
const myBool = [true, false, true, false];
//Normal Use
console.log(getElementNumber([10, 20, 30, 40, 50], 3));
console.log(getElementString(myString, 2));
console.log(getElementBoolean(myBool, 2));
//Generic Use
console.log(getElement(myNum, 3));
console.log(getElement(myString, 2));
console.log(getElement(myBool, 2));
merge("A", true);
