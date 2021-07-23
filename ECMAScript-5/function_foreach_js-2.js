//forech functional implementation
var arr = [1, 2, 3, 4, 5]

function forEach(arr, cb) {
    for (var i = 0; i < arr.length; i++) {
        cb(arr[i])
    }
}

var sum = 0
forEach(arr, function(value){
    sum += value
})

console.log(sum)