//New and Use
const point: [x:number, y:string] = [10, "A"]
point[0]=100
console.log(point)

const goodStatus: [code:number, status:string] = [200, "OK"]
const notFound: [code:number, status:string] = [404, "Not found"]
const badRequest: [code:number, status:string] = [400, "Bad Request"]

console.log(goodStatus)

//Tuple Type
type HttpStstusCode=[number,string]

const goodStatus2:HttpStstusCode = [200, "OK"]
const notFound2: HttpStstusCode = [404, "Not found"]
const badRequest2: HttpStstusCode = [400, "Bad Request"]