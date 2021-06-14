//condition using logical operator
var a=10, b=20, c=30, d=40

if (a > b && c > d) {
    console.log('A is greater than B and C is greater than D')
} else if (a > b && c < d) {
    console.log('A is greater than B and C is smaller than D')
} else if (a < b && c > d) {
    console.log('A is smaller than B and C is greater than D')
} else if (a < b && c < d) {
    console.log('A is smaller than B and C is smaller than D')
} else {
    console.log('Invalid')
}