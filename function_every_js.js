//every function with callback
var arr = [4, 5, 1, 6, 2, 9, 8, 1, 5, 7]

var result = arr.every(function (value) {
    return value % 2 === 0
})
console.log(result)

var result1 = arr.every(function (value) {
    return value > 0
})
console.log(result1)