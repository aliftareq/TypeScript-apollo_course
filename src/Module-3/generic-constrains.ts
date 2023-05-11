//generic constrains

type MandatoryTypes = {
    name: string,
    age: number,
    salary: number
}

const createNewData = <T extends MandatoryTypes>(myInfo: T) => {
    const crush = "jennfer lawrence"
    const newData = { ...myInfo, crush }
    return newData
}

type MyInfoType = {
    name: string,
    age: number,
    salary: number,
    other1: boolean,
    other2: null,
}

const myInfo: MyInfoType = {
    name: 'persian',
    age: 32,
    salary: 10000000,
    other1: false,
    other2: null
}


const result8 = createNewData<MyInfoType>(myInfo)

result8.age