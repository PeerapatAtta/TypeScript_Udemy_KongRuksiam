
function total1(a:number,b:number) {
    return a+b;
}
//Rest Parameter
const total2 = (...numbers:number[])=>{
    return numbers.reduce((result,value)=>{return result+value},0)
}

console.log(total1(100,200))
console.log(total2(100,200))
console.log(total2(100,200,300))

