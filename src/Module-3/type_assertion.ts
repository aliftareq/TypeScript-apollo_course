//type_assertion :

let emni: any;

//assertion as string
emni = "Next level web developer";

// (emni as string).indexOf("m") //system - 1
<string>emni.indexOf("m") // system - 2

//assertion as number
emni = 89;
(emni as number).valueOf()



function kgTogram(param: string | number): string | number | undefined {
    if (typeof param === "string") {
        const value = parseFloat(param) * 1000
        return `The converted result is ${value}`
    }
    if (typeof param === "number") {
        return param * 1000
    }
    else {
        return `The given input is undefined`
    }
}

const resultToBeNumber = kgTogram(1000) as number;
const resultToBeString = <string>kgTogram(1000)
type customErrorType = {
    message: string,
}

try {

}
catch (err) {
    console.log((err as customErrorType).message);
}