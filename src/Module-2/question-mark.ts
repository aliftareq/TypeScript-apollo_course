//ternary operator

const age: number = 22


if (age >= 18) {
    console.log('yes , adult');
}
else {
    console.log('no. he/she is not');
}

const isAdult = age >= 18 ? "yes" : 'no'
console.log(isAdult);


//nullish coeslancing operator.
// setting a value based on null or undefined.


const isAuthenticatedUser = false;

const userName = isAuthenticatedUser ?? "Guest"
const userName2 = isAuthenticatedUser ? isAuthenticatedUser : "Guest"
console.log({ userName }, { userName2 })

type Manush = {
    name: string,
    age: number,
    address: {
        city: "No City",
        road: 'No road',
        home?: string;
    }
}


const manush1: Manush = {
    name: "alif",
    age: 22,
    address: {
        city: "No City",
        road: 'No road',
        // home: "agrabad"
    },
}


const home = manush1?.address?.home ?? "No home"
const home1 = manush1?.address?.home ? manush1?.address?.home : "No home"

console.log({ home }, { home1 });