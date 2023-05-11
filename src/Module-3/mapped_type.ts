
//example of map functin in javaScript
const arrayOfNumbers = [1, 2, 3]  //['1', '2', '3']
const arrayOfStrings = arrayOfNumbers.map((num) => num.toString())
console.log(arrayOfStrings);


// map function in TypeScript
type AreaNumber = {
    height: number,
    width: number,
}

type AreaString = {
    height: string,
    width: string,
}

type AreaReadonly = {
    readonly height: number,
    readonly width: number,
}

//assining type in variable

const RectangularArea: AreaReadonly = {
    height: 10,
    width: 12,
}

// RectangularArea.width = 14

type A = AreaNumber['height'] // look up types
type B = keyof AreaNumber; //  height | width



//example of map function in TypeScript

type volume = {
    height: number,
    width: number,
    depth: number,
}

type Area<T> = {
    // [mapping]:type
    // [key in keyof volume]: volume[key]
    readonly [key in keyof T]: T[key]
}

const area: Area<{ height: number, width: string }> = {
    height: 10,
    width: "20m"
}

// area.height = 40



