//find value with symbol private data using oop js
const _radius = Symbol()
const _name = Symbol()
class Circle {
    constructor(radius, name) {
        this[_radius] = radius
        this[_name] = name
    }

    draw() {
        console.log('Drawing...')
    }
}

let c1 = new Circle(2, 'JS')

console.log(c1)

let index = Object.getOwnPropertySymbols(c1)[0]
let index1 = Object.getOwnPropertySymbols(c1)[1]
console.log(c1[index])
console.log(c1[index1])