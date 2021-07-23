//object iterate
var obj = {
    math: 80,
    chemistry: 96,
    physics: 90
}

for (var i in obj) {
    console.log(i + ': ' + obj[i])
}