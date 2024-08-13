//Normal Function 
function getElementNumber(arr:number[],count:number){
    return arr.slice(arr.length-count)
}
function getElementString(arr:string[],count:number){
    return arr.slice(arr.length-count)
}
function getElementBoolean(arr:boolean[],count:number){
    return arr.slice(arr.length-count)
}
//Generic Function
function getElement<T>(arr:T[],count:number){
    return arr.slice(arr.length-count)
}
function merge<T,U>(param1:T,param2:U){
    console.log(`${param1}-${param2}`)
}

//Parameter
const myNum:number[]=[10,20,30,40,50]
const myString:string[]=["10","20","30","40","50"]
const myBool:boolean[]=[true,false,true,false]

//Normal Use
console.log(getElementNumber([10,20,30,40,50],3))
console.log(getElementString(myString,2))
console.log(getElementBoolean(myBool,2))
//Generic Use
console.log(getElement<number>(myNum,3))
console.log(getElement<string>(myString,2))
console.log(getElement<boolean>(myBool,2))

merge<string,boolean>("A",true)


