//summation using recursive function
var arr = [1, 2, 3, 4, 5]

function sumOfArray(arr, lastIndex) {
    if (lastIndex < 0) {
        return 0
    }
    return arr[lastIndex] + sumOfArray(arr, lastIndex - 1)
}
console.log(sumOfArray(arr, arr.length - 1))