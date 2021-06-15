//function scope
var a = 'abc'

function x() {
    function y() {
        var a = 20
        console.log(a)
    }
    console.log(a)
    y()
}

x ()