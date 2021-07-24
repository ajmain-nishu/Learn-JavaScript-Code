//iterate using map method
let map = new Map([
    ['a', 10],
    ['b', 20],
    ['c', 30]
])

map.forEach((v, k) => {
    console.log(k, v)
})