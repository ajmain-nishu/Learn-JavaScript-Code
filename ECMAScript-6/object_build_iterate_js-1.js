//build iterable string
let str = 'Nishu'

let iterate = str[Symbol.iterator]()

console.log(iterate.next())
console.log(iterate.next())
console.log(iterate.next())
console.log(iterate.next())
console.log(iterate.next())
console.log(iterate.next())