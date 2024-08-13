
//Generic Function
function merge2<T extends object,U extends object>(param1:T,param2:U){

    return {
        ...param1,
        ...param2
    }
}
//Object
const product = {name:"Shirt",price:500}
const description={colors:["White","Red","Green"]}
//Use
console.log(merge2(product,description))



