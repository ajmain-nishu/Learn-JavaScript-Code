//find value using weak map
let a = {a: 10}, b = {b: 20}

let weakMap = new WeakMap([[a, 45], [b, 75]])

console.log(weakMap.get(a))