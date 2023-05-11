/*generic - keyof */


//example of using "keyof" keyword

type personType = {
    name: string,
    age: number,
    address: string,
}


type newType = 'name' | 'age' | 'address' //manually done


type newTypeUsingkeyOf = keyof personType

const a: newType = 'name'
const b: newTypeUsingkeyOf = 'address'


//using "keyof" keyword in function

function getProperty<x, y extends keyof x>(obj: x, key: y) {
    obj[key]
}

const property = getProperty({ name: 'Mr. X', age: 100 }, "age")



