//problem-1 

function getArrayItem<T, K extends keyof T>(arr: T[], index: number, key: K): T[K] {

    const item = arr[index];

    return item[key];

}



const users = [{ name: 'John', age: 30 }, { name: 'Mary', age: 25 },];

console.log(getArrayItem(users, 0, 'name'))


//problem-2

// type Data = { num1: number }

// type B7 = {
//   [key in keyof Data]: string;
// }

// const numbers:B = {
//   num1: 20
// }


//problem- 3

interface Person {
    firstName: string;
    lastName: string;
}

function fullName<T extends Person>(person: T): string {
    return `${person.firstName} ${person.lastName}`;
}
