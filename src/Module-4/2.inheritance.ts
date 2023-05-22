/*inhertance*/

//Parent class
class Person {
    name: string
    age: number
    address: string

    constructor(name: string, age: number, address: string,) {
        this.name = name
        this.address = address
        this.age = age
    }

    makeSleep(hours: number): string {
        return `This person named ${this.name}  will sleep for ${hours} hours`
    }
}



//child Class

class Student extends Person {
    constructor(name: string, age: number, address: string,) {
        super(name, age, address)
    }
}

const Stundent1 = new Student("Alif", 23, 'Dewanhat')
console.log(Stundent1.makeSleep(6));


//child class
class Teacher extends Person {
    designation: string
    constructor(name: string, age: number, address: string, designation: string) {
        super(name, age, address)
        this.designation = designation
    }

    takeClasses(Numberofclass: number): string {
        return `This Teacher named ${this.name} person will take ${Numberofclass} classes`
    }
}

const Teacher1 = new Teacher("Nurul amin", 56, "Raipur", "Assistant Teacher")
console.log(Teacher1.takeClasses(8));



