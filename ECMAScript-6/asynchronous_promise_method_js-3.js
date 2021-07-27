//resolve all value output with web api using promise method
let p1 = new Promise(resolve => {
    setTimeout(resolve, 5000, 'One')
})

let p2 = new Promise(resolve => {
    setTimeout(resolve, 3000, 'Two')
})

let p3 = new Promise(resolve => {
    setTimeout(resolve, 4000, 'Three')
})

let promiseArr = [p1, p2, p3]

Promise.all(promiseArr)
    .then(arr => console.log(arr))