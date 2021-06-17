//find even numbers using filter function
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

var filterArr = arr.filter(function(value) {
    return value % 2 === 0
})
console.log(filterArr)