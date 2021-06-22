//closure function using loops
for (var i = 1; i <= 5; i++) {
    (function(n) {
        setTimeout(function() {
            console.log(n)
        }, 1000 * i)
    })(i)
}