//generic-type : 

type GenericArray<T> = Array<T>

// const rollnumbers: number[] = [23, 24, 56] //system-1
// const rollnumbers: Array<number> = [23, 24, 56] //system-2
const rollnumbers: GenericArray<number> = [23, 24, 56] //system-3

// const rollnumbers2: string[] = ["23", "24", "56"]
// const rollnumbers2: Array<string> = ["23", "24", "56"]
const rollnumbers2: GenericArray<string> = ["23", "24", "56"]

// const rollnumbers3: boolean[] = ["23", "24", "56"]
// const rollnumbers3: Array<boolean> = [true, false, true]
const rollnumbers3: GenericArray<boolean> = [true, false, true]


type NameRollType = { name: string, roll: number }
const userNameAndRollNumbers: GenericArray<NameRollType> = [
    { name: 'student-1', roll: 1 },
    { name: 'student-2', roll: 2 }
]


/*for taking multiple param for generic type */


type GenericTuple<x, y> = [x, y]

const relation: GenericTuple<string, string> = ['Alif', "jennifer lawrence"]


// type relationWithSalaryType = { name: string, salary: number }

interface IrelationWithSalaryInterface {
    name: string,
    salary: number
}

const relationWithSalary: GenericTuple<IrelationWithSalaryInterface, string> = [{ name: 'alif', salary: 100000000 }, 'jennifer lawrence']

