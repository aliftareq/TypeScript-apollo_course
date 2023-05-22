//generic_function


/*-------generic function for arrow function----------*/

//general_function
const createArray = (param: string): string[] => {
    return [param]
}
const result1 = createArray("Bangladesh")

//generic_function(for single type)
const createArray1 = <T>(param: T): T[] => {
    return [param]
}

const result2 = createArray1<boolean>(true)
const result3 = createArray1<string>("england")
const result4 = createArray1<{ name: string, age: number }>({ name: 'alif', age: 23 })

console.log(result1, result2, result3, result4);


//generic_function for tuple(for multiple type)
const createArray2 = <x, y>(param1: x, param2: y): [x, y] => {
    return [param1, param2]
}

const result5 = createArray2<boolean, number>(true, 7)
const result6 = createArray2<string, string>("england", "famous for stealing")

type userType = { name: string, age: number, verification: boolean }
const result7 = createArray2<userType, null>({ name: 'alif', age: 23, verification: true }, null)


/*---------use of spread operator-------------*/


const myInfo1 = {
    name: 'persian',
    age: 32,
    salary: 10000000,
}

const createNewData1 = <T>(myInfo: T) => {
    const crush = "jennfer lawrence"
    const newData = { ...myInfo, crush }
    return newData
}

const result10 = createNewData(myInfo1)

result8.age

