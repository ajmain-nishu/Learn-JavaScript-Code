//condition using logical operator
var a = 10
var b = 20
var c = 30
var d = 40

if (a > b || c > d) {
    console.log('A is greater than B or C is greater than D')
} else if (a > b || c < d) {
    console.log('A is greater than B or C is smaller than D')
} else {
    console.log('Invalid')
}