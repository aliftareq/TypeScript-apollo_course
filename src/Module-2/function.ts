//topic : function, arrow function

//you must mention the type of parameter

function add(num1: number, num2: number): number {
    return num1 + num2;
}


add(2, 2)


const addArrow = (num1: number, num2: number): number => num1 + num2;

const numArr = [1, 4, 5]

const newNumArr = numArr.map((num: number) => num * num)



const person: {
    name: string,
    balance: number,
    addBalance(money: number): string,
} = {
    name: "Mezba",
    balance: 5,
    addBalance(money: number) {
        return `My new balance is ${this.balance + money}`;
    }
}


/*-------------default parameter------*/

function addNum(num1: number, num2: number = 10): number {
    return num1 + num2;
}


addNum(2,)


/*-------spread operator-------*/

const myfriends = ['tom', 'jerry', "oggy", "joye", "jack"]

const newFriends = ["monica", 'rachel', "pheobe"]

myfriends.push(...newFriends)

console.log(myfriends);


/*----------rest operator----------*/

//combine all the value and make an array.

// const greetFriends = (f1: string, f2: string, f3: string): void => console.log(`Hi ${f1} \n Hi ${f2} \n Hi ${f3} \n`);

const greetFriends = (...friends: string[]): void => friends.forEach(friend => console.log(`Hi ${friend}`));

greetFriends('scarlet', 'gal gadot', 'jennifer', 'eliena dcruz', 'priyanka')


/*--------array & object destructuring----------------*/

//array destructure
const movies = ['xander cage', '3 idiots', 'sawsank redemption']

const [favMovie] = movies;

console.log(favMovie);


//object destructure
const MyFavSeries = {
    fullname: 'la casa de papel',
    episodes: 7
}

const { fullname } = MyFavSeries;