//find large number using filter function
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

var filterArr = arr.filter(function(value) {
    return value > 4
})
console.log(filterArr)