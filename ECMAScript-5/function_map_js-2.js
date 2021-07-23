//map functional implementation
var arr = [1, 2, 3]

function myMap(arr) {
    var newArr = []
    for (var i = 0; i < arr.length; i++) {
        var temp = arr[i] * arr[i]
        newArr.push(temp)
    }
    return newArr
}
console.log(myMap(arr))