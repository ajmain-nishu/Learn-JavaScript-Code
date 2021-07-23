//first class function stored in a object
function add(a, b) {
    return a + b
}

var obj = {
    sum: add
}
console.log(obj.sum(7, 9))