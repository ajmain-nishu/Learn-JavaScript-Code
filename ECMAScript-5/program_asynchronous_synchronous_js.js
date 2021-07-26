//difference between asynchronous vs synchronous
console.log('This is line One')

setTimeout(() => {
    console.log('This is line Two')
}, 4000)

console.log('This is line Three')

setTimeout(() => {
    console.log('This is line Four')
}, 3000)

setTimeout(() => {
    console.log('This is line Five')
}, 0)

console.log('This is line Six')