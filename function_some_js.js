//some function with callback
var arr = [-1, 4, 5, 1, 6, 2, 9, 8, 1, 5, 7]

var result = arr.some(function (value) {
    return value % 2 === 1
})
console.log(result)

var result1 = arr.some(function (value) {
    return value % 2 === 0
})
console.log(result1)

var result2 = arr.some(function (value) {
    return value < 0
})
console.log(result2)