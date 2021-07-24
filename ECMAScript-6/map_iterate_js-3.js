//iterate using for of loop map method
let map = new Map([
    ['a', 10],
    ['b', 20],
    ['c', 30]
])

for (let [k, v] of map) {
    console.log(k, v)
}