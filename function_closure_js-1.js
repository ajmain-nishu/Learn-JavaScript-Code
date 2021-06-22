//closure function
function test() {
    var msg = 'I am Learning Lexical Scope and Closure'

    return function() {
        console.log(msg)
    }
}

var sayMsg = test()
sayMsg()