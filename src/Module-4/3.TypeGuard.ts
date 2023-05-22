//TypeGaurd


//1. => example of keyof Gaurd

type Alphaneumeric = string | number
function add(param1: Alphaneumeric, param2: Alphaneumeric) {
    if (typeof param1 == "number" && typeof param2 == "number") {
        return param1 + param2
    }
    else {
        param1.toString() + param2.toString()
    }
}


console.log(add("2", "3"));
console.log(add(2, 3));

//2. => In Gaurd

type NormalUserType = {
    name: string,
}

type AdminUserType = {
    name: string,
    role: 'admin'
}


const normalUser1: NormalUserType = {
    name: 'Mr. Normal'
}

const adminUser1: AdminUserType = {
    name: 'Mr. admin',
    role: 'admin'
}


function getUser(user: NormalUserType | AdminUserType): string {
    if ('role' in user) {
        return `I am an admin & my name is ${user?.name}`
    }
    else {
        return `I am a normal user & my name is ${user.name}`
    }
}

console.log(getUser(normalUser1));
console.log(getUser(adminUser1));


//3. instanceof gaurd.

class Animal {
    name: string;
    species: string;

    constructor(name: string, species: string) {
        this.name = name
        this.species = species
    }

    makeSound() {
        console.log("I am making Sound phew phew")
    }
}

class Dog extends Animal {
    constructor(name: string, species: string) {
        super(name, species)
    }
    makeBark() {
        console.log('Make gheu gheu');
    }
}

class Cat extends Animal {
    constructor(name: string, species: string) {
        super(name, species)
    }
    makeMeow() {
        console.log('Make Meow Meow');
    }
}


const animal1 = new Dog("Labrador", "Dog")
const animal2 = new Cat("Persian", "Cat")


function getAnimal(animal: Animal) {
    if (animal instanceof Dog) {
        animal.makeBark();
    }
    else if (animal instanceof Cat) {
        animal.makeMeow();
    }
    else {
        animal.makeSound()
    }
}


getAnimal(animal1)
getAnimal(animal2)


//4. checking Type by instance of ("is" keyof gaurd)

function isDog(animal: Animal): animal is Dog {
    return animal instanceof Dog
}

function isCat(animal: Animal): animal is Cat {
    return animal instanceof Cat
}

function getAnimal2(animal: Animal) {
    if (isDog(animal)) {
        animal.makeBark();
    }
    else if (animal instanceof Cat) {
        animal.makeMeow();
    }
    else {
        animal.makeSound()
    }
}