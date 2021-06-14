//array search
var arr = [2, 5, 3, 8 , 19, 20, 1]
var find = 10
var isFound = false

for (var i = 0; i< arr.length; i++) {
    if (arr[i] === find) {
        console.log('Data found at index ' + i)
        isFound = true
        break
    } 
}

if (!isFound) {
    console.log('Data not found')
}