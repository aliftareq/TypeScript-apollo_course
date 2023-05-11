//null or nullable type

const searchName = (value: string | null) => {
    if (value === null) {
        console.log("there is nothing to search")
    }
    else {
        console.log('searching....');
    }
}

searchName(null)


//unknown type

// kmh^-1 -> ms^-1

const getMyCarSpeed = (speed: unknown) => {
    if (typeof speed === "number") {
        const convertedSpeed = (speed * 1000) / 3600
        console.log(`My speed is ${convertedSpeed}`);
    }
    if (typeof speed === "string") {
        const value = speed.split(' ')
        const convertedSpeed = (parseInt(value[0]) * 1000) / 3600
        console.log(`My speed is ${convertedSpeed}`);

    }
    else {
        console.log('given input is wrong');
    }
}

getMyCarSpeed(10)
getMyCarSpeed('20 kmh^-1')
getMyCarSpeed(true)


//never type


function throwError(message: string): never {
    throw new Error(message)
}

throwError('An error occured')


