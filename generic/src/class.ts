//Normal Class
class Stack{
    //property
    private items:string[]=[];
    //method
    pushElement(element:string){
        this.items.push(element)
    }
}
//Object
const stack = new Stack();
//Use
stack.pushElement("A")
stack.pushElement("B")
console.log(stack)
//--------------------------------

//Generic Class
class Stack2<T=string>{
        //property
        private items:T[]=[];
        //method
        pushElement(element:T){
            this.items.push(element)
        }
}
//Object
const stack2 = new Stack2<number>();
const stack3 = new Stack2<number>();
const stack4 = new Stack2();
//Use
stack2.pushElement(10)
stack2.pushElement(20)
console.log(stack2)