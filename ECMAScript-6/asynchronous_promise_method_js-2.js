//resolve all value output using promise method
let p1 = Promise.resolve('One')
let p2 = Promise.resolve('Two')
let p3 = Promise.resolve('Three')

let promiseArr = [p1, p2, p3]

Promise.all(promiseArr)
    .then(arr => {
        console.log(arr)
    })