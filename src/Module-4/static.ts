//if we want access the variable/method only with the class name(instead of instance) we use "static" keyword in

class Counter {
    static counter: number = 0;

    static increment(): number {
        return Counter.counter = Counter.counter + 1
    }

    static decrement(): number {
        return Counter.counter = Counter.counter - 1
    }
}

const instance1 = new Counter()
const instance2 = new Counter()

console.log(Counter.increment()); // 0->1
console.log(Counter.increment()); // 1->2