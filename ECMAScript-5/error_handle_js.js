//error handling using if else in oop js
function changeToInt(v) {
    let result = Number.parseInt(v)
    if(!result) {
        return 'Please enter a integer value'
    }
    return result
}

let result  = changeToInt('asaa')
console.log(result)