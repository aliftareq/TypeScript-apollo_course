//

class BankAccount {
    public id: number;
    public name: string;
    private _balance: number;

    constructor(id: number, name: string, balance: number) {
        this.id = id
        this.name = name
        this._balance = balance
    }

    // getBalance() {
    //     return this._balance
    // }

    //getter
    get balance(): number {
        return this._balance
    }

    addAmount(amount: number) {
        this._balance = this._balance + amount
        return this._balance
    }

    //setter
    set deposit(amount: number) {
        this._balance = this._balance + amount
    }
}


const myAccount = new BankAccount(444, "persian", 90)
// console.log(myAccount);

// console.log(myAccount.getBalance());
console.log(myAccount.balance);

// myAccount.addAmount(20)
myAccount.deposit = 40
console.log(myAccount.balance);