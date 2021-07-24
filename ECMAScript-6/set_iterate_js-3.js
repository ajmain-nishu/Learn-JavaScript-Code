//iterate or not
let set = new Set([1, 2, 3])

function isIterabel(obj) {
    return typeof obj[Symbol.iterator] === 'function'
}

console.log(isIterabel(set))