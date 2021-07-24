//function generator iterate
let arr = [1, 2, 3]

function * generate(collection) {
    for (let i = 0; i < collection.length; i++) {
        yield collection[i]
    }
}

let it = generate(arr)
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())