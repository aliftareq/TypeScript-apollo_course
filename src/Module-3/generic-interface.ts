//generic-interface 
interface crushInterface<T> {
    name: string,
    husband: T,
}

//examples for generic interface
const Crush1: crushInterface<boolean> = {
    name: "jennifer lawrence",
    husband: true,
}

const Crush2: crushInterface<string> = {
    name: "jennifer lawrence",
    husband: "annonymous",
}


interface husbandInterface {
    name: string,
    salary: number
}
const Crush3: crushInterface<husbandInterface> = {
    name: "jennifer lawrence",
    husband: { name: 'annoy', salary: 10000 },
}


/*----------------multiple parameter for generic interface----------------*/


//generic-interface 
interface crushInterface<T, U = null> {
    name: string,
    husband: T,
    wife?: U,
}

//examples for generic interface
const Crush11: crushInterface<boolean, string> = {
    name: "jennifer lawrence",
    husband: true,
    wife: 'sokhina'
}


interface personInterface {
    name: string,
    age: number
}

const Crush12: crushInterface<personInterface, personInterface> = {
    name: "jennifer lawrence",
    husband: {
        name: 'alif',
        age: 23
    },
    wife: {
        name: 'gal gadot',
        age: 36
    }
}



