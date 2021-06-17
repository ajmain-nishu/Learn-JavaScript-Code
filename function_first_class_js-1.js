//first class function stored in an array
function add(a, b) {
    return a + b
}

var arr = []
arr.push(add)
console.log(arr[0](5, 1))