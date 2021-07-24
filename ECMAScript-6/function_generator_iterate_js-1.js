//function generator iterate
function * generate() {
    yield 1
    yield 2
    yield 3
}

let it = generate()
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())