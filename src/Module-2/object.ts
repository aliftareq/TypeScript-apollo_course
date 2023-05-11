//topic : object , optional property, object literal

const User: {
    name: string,
    age: number,
    isMarried: boolean,
    wife?: string;  //optional type

} = {
    name: "harun mia",
    age: 52,
    isMarried: true,
    wife: "BB",
}


//incase of specific property(literal type)

// const User: {
//     company: "programming Hero"
//     name: string,
//     age: number,
//     isMarried: boolean,
//     wife?: string;
// } = {
//     company: "programming Hero",
//     name: "harun mia",
//     age: 52,
//     isMarried: true,
//     wife: "BB",
// }

//incase of case readonly

// const User: {
//     readonly company: string;
//     name: string,
//     age: number,
//     isMarried: boolean,
//     wife?: string;
// } = {
//     company: "programming Hero",
//     name: "harun mia",
//     age: 52,
//     isMarried: true,
//     wife: "BB",
// }

// User.company = "abul khair steel"
//we cant change the property value or type if we mention "readonly"