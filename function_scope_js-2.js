//function scope
var a = 'abc'

function x() {
    var a = 40
    function y() {
        console.log(a)
    }
    console.log(a)
    y()
}

x ()