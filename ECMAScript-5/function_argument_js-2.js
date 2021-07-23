//function argument
function test() {
    for (var i = 0; i < arguments.length; i++) {
        console.log(arguments[i])
    }
}
test(10, 20, 30)