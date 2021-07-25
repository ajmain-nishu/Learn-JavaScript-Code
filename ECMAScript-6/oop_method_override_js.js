//method overriding in oop js
class Shape {
    constructor(color) {
        this.color = color
    }
    draw() {
        console.log('Drawing...')
    }
}

class Rectangle extends Shape {
    constructor(color,width, height) {
        super(color)
        this.width = width
        this.height = height
    }

    draw() {
        console.log('I am Drawing...')
    }

    calculate() {
        return this.width * this.height
    }
}

let r = new Rectangle()

r.draw()