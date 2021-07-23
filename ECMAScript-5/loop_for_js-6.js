//summation even number using for loop
var sum = 0
var i

for (i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(sum + ' + ' + i + ' = ' + (sum + i))
        sum += i
    }
}
console.log('result = ' + sum)