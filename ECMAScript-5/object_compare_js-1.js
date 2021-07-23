//comparing in object
var obj = {
    math: 80,
    chemistry: 96,
    physics: 90
}

var obj1 = {
    math: 80,
    chemistry: 96,
    physics: 90
}

console.log(JSON.stringify(obj) === JSON.stringify(obj1))