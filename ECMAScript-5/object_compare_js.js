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

if (obj.math === obj1.math && obj.chemistry === obj1.chemistry && obj.physics === obj.physics) {
    console.log(true)
} else {
    console.log(false)
}