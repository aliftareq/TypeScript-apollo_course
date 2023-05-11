//Interface : non-primitive type(object , array, function)
//type alias : primitive type(string,number, boolen , null, undefined)



//type-alias

type user = {
    name: string,
    age: number
};

type ExtendedUser = user & {
    role: string
}

//example 
const userwithTypeAlias: user = {
    name: 'type alias',
    age: 20,
}


//interface

interface IUser {
    name: string,
    age: number,
}

interface IExtendedUser extends IUser {
    role: string,
}

const userWithInterface: IUser = {
    name: "interface",
    age: 200,
}

//example
const employee: IExtendedUser = {
    name: 'alif',
    age: 23,
    role: 'web developer'
}


//example of type alias and interface for function

type addNumberType = (num1: number, num2: number) => number

interface IAddNumbers {
    (num1: number, num2: number): number
}
// const addNumber: addNumberType = (num1, num2) => num1 + num2;
const addNumber: IAddNumbers = (num1, num2) => num1 + num2;


//type alias & interface for array

type rollNumbersType = number[]

interface IRollNumbers {
    [index: number]: number
}

// const RollNumber: rollNumbersType = [1, 2, 34]
const RollNumber: IRollNumbers = [1, 2, 34]
