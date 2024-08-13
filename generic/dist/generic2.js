"use strict";
//Generic Function
function merge2(param1, param2) {
    return Object.assign(Object.assign({}, param1), param2);
}
//Object
const product = { name: "Shirt", price: 500 };
const description = { colors: ["White", "Red", "Green"] };
//Use
console.log(merge2(product, description));
