//find index function
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

var result = arr.findIndex(function (value) {
    return value === 9
})

console.log(result)