//find maximum value using reduce function
var arr = [1, 2, 3, 4, 5]

var max = arr.reduce(function(prev, curr) {
    return Math.max(prev, curr)
})
console.log(max)