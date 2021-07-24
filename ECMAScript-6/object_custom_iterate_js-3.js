//custom iterable string
let str = 'Nishu'
function createIterator(collection) {
    let i = 0
    return {
        next() {
            return {
                done: i >= collection.length,
                value: collection[i++]
            }
        }
    }
}

let iterate = createIterator(str)
console.log(iterate.next())
console.log(iterate.next())
console.log(iterate.next())
console.log(iterate.next())
console.log(iterate.next())
console.log(iterate.next())