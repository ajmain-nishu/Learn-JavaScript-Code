//function generator iterate
let obj = {
    start: 1,
    end: 3,

    [Symbol.iterator]: function * () {
        let currentValue = this.start
        while (currentValue <= this.end) {
            yield currentValue++
        }
    }
}

let iterate = obj[Symbol.iterator]()

console.log(iterate.next())
console.log(iterate.next())
console.log(iterate.next())
console.log(iterate.next())