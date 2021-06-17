//array callback functional
var arr = [1, 2, 3, 4, 5]

function forEach(arr, cb) {
    for (var i = 0; i < arr.length; i++) {
        cb(arr[i], i, arr)
    }
}

forEach(arr, function(value, index, arr){
    arr[index] = value + 5
})

console.log(arr)