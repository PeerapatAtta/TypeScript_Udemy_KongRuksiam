//Union Type
let age2: number | string | boolean
age2 = 50;
age2 = "Off"
age2 = true
console.log(age2)

//Type Alias
type Point = {
    x: number,
    y: number,
}
type Position = {
    lat: number,
    long: number,
}

let coordinates: Point | Position;
coordinates = { x: 5, y: 10 }
coordinates = { lat: 50, long: 500 }

//Function
function sayHi(person: string | string[]): void {
    if (typeof person === "string") {
        console.log(`Hello ${person}`)
    } else {
        person.forEach((element) => { console.log(`Hello ${element}`) })
    }
}
sayHi("Off")
sayHi(["B", "C"])

