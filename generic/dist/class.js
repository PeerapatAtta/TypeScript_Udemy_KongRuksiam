"use strict";
//Normal Class
class Stack {
    constructor() {
        //property
        this.items = [];
    }
    //method
    pushElement(element) {
        this.items.push(element);
    }
}
//Object
const stack = new Stack();
//Use
stack.pushElement("A");
stack.pushElement("B");
console.log(stack);
//--------------------------------
//Generic Class
class Stack2 {
    constructor() {
        //property
        this.items = [];
    }
    //method
    pushElement(element) {
        this.items.push(element);
    }
}
//Object
const stack2 = new Stack2();
const stack3 = new Stack2();
const stack4 = new Stack2();
//Use
stack2.pushElement(10);
stack2.pushElement(20);
console.log(stack2);
