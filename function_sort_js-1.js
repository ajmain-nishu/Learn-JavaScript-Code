//minimum to maximun using sorting function
var arr = [4, 5, 1, -4, 6, 2, -8, 9, 8, -1, 1, 5, 7]

arr.sort(function (a, b) {
    if (a > b) {
        return 1
    } else if (a < b) {
        return -1
    } else {
        return 0
    }
})

console.log(arr)