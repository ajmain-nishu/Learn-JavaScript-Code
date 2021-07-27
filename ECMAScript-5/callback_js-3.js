//callback with asynchronous function
let arr = [1, 2, 3, 4]

function asyncMap(arr, cb) {
    return arr.map(v => {
        setTimeout(() => cb(v), 0)
    })
}

let qbArr = asyncMap(arr, v => {
    console.log(v)
})

console.log(qbArr)