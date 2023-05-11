//type alias and optional type

const crush1: {
    name: string;
    age: number;
    profession: string;
    address: string;
} = {
    name: 'moyna pakhi',
    age: 20,
    profession: 'web developer',
    address: 'uganda'
}

const crush2: {
    name: string;
    age?: number; //optional type
    profession: string;
    address: string;
} = {
    name: 'tiya pakhi',
    age: 20,
    profession: 'next level web developer',
    address: 'mexico'
}


//example of Type alias.

type CrushType = {
    name: string;
    age?: number;
    profession: string;
    address: string;
}

const crush3: CrushType = {
    name: 'tiya pakhi',
    age: 20,
    profession: 'next level web developer',
    address: 'mexico'
}


type CrushMarriedType = boolean;
const isCrushMarried: CrushMarriedType = false;

type CourseNameType = string
const CourseName: CourseNameType = 'next level developer'

//type alias for function

type operationType = (x: number, y: number) => number

const Calculate = (number1: number, number2: number, operation: operationType) => {
    return operation(number1, number2)
}


console.log(Calculate(10, 20, (x, y) => x + y));
console.log(Calculate(10, 20, (x, y) => x - y));
console.log(Calculate(10, 20, (x, y) => x * y));
console.log(Calculate(10, 20, (x, y) => x / y));