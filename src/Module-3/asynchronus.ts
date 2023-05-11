/*----asynchronus typeScript---*/

//mockPromise:string
const makePromise = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
        const data: string = "Data is fetched"
        if (data) {
            resolve(data)
        } else {
            reject('failed to fetch data')
        }
    })
}

const getPromiseData = async (): Promise<string> => {
    const data = await makePromise();
    return data
}

//mockPromise:boolean
const makePromiseBoolean = (): Promise<boolean> => {
    return new Promise<boolean>((resolve, reject) => {
        const data: boolean = true
        if (data) {
            resolve(data)
        } else {
            reject('failed to fetch data')
        }
    })
}

const getPromiseDataBoolean = async (): Promise<Boolean> => {
    const data = await makePromiseBoolean();
    return data
}

//mockPromise:object

type DataType = { data: string }

const makePromiseObject = (): Promise<DataType> => {
    return new Promise<DataType>((resolve, reject) => {
        const data: DataType = { data: "Data is fetched" }
        if (data) {
            resolve(data)
        } else {
            reject('failed to fetch data')
        }
    })
}

const getPromiseDataObject = async (): Promise<object> => {
    const data = await makePromiseObject();
    return data
}


/*------calling an api : fetching data -----*/
interface ITodo {
    userId: number,
    id: number,
    title: string,
    completed: boolean,
}
const getToDo = async (): Promise<ITodo> => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    return await res.json()
}

const getTodoData = async (): Promise<void> => {
    const result = await getToDo()
    console.log(result);
}


getTodoData()
