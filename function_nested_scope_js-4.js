//function nested scope
var x = 55

function test() {
    var x = 35
    function nested() {
        console.log(x)
    }
    nested()
}

test()