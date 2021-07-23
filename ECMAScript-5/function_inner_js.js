//inner function or nested function
function something(greet, name) {
    function sayHi() {
        console.log(greet, name)
    }

    sayHi()
}

something('Good Morning', 'Ajmain Nishu')