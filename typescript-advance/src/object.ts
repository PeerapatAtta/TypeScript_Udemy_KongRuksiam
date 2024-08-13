const person1 = {
    name: "Off",
    age: 40,
}

const person2: { name: string, age: number } = {
    name: "B",
    age: 25,
}

function showDetail(data: { name: string, age: number }) {
    console.log(`Name = ${data.name}, Age = ${data.age}`)
}

showDetail(person1);

const showDetail2 = (data: { name: string, age: number }) => {
    console.log(`Name = ${data.name}, Age = ${data.age}`)
}

showDetail2(person2);

const position: { lat: number, long: number } = {
    lat: 10,
    long: 25,
}

function randomPosition(): { lat: number, long: number } {
    return {
        lat: Math.random(),
        long: Math.random(),
    }
}

const randomPosition2 = (): { lat: number, long: number } => {
    return {
        lat: Math.random(),
        long: Math.random(),
    }
}

console.log(randomPosition());
console.log(randomPosition2());

//Excess Properties Check
const person3 = {
    name: "Off",
    age: 40,
    Address: "BKK"
}

showDetail(person3);
showDetail({
    name: "Off",
    age: 40,
    
});




