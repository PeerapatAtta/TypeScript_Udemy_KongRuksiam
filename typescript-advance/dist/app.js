"use strict";
function showEmployee(name, age, address = "BKK") {
    console.log(`Name = ${name}, Age = ${age}, Addresss = ${address}`);
}
showEmployee("Off", 40);
showEmployee("B", 25, "Rayong");
