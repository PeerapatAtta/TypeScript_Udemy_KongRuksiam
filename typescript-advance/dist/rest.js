"use strict";
function total1(a, b) {
    return a + b;
}
//Rest Parameter
const total2 = (...numbers) => {
    return numbers.reduce((result, value) => { return result + value; }, 0);
};
console.log(total1(100, 200));
console.log(total2(100, 200));
console.log(total2(100, 200, 300));
