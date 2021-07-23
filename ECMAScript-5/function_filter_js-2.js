//filter function implement
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function myFilter() {
    var newArr = []
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            newArr.push(arr[i])
        }
    }
    return newArr
}
console.log(myFilter())