//New
interface Job {
    title: string,
    income: number,
}

interface Contact {
    address: string,
    phone?: string,
}

interface Person extends Job, Contact {
    name: string,
    age?: number,
    readonly gender: string,
    info: () => void;
}

interface Person2 {
    name: string,
    age?: number,
    readonly gender: string,
    info: () => void;
}


//Use

let person4: Person;

person4 = {
    name: "A",
    age: 30,
    gender: "male",
    info() {
        console.log(`Latest Data = ${new Date().toLocaleString()}`)
    },
    title: "Mr",
    income: 20000,
    address: "BKK"
}

person4.age = 40;
console.log(person4)
person4.info()

//Inetersection Type

type People = Person2 & Job & Contact

let person5: People = {
    name: "A5",
    age: 30,
    gender: "male",
    info() {
        console.log(`Latest Data = ${new Date().toLocaleString()}`)
    },
    title: "Mr",
    income: 20000,
    address: "BKK"
}
console.log(person5)

//Type vs Interface