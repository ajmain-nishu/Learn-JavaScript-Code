//return function
function greet(msg) {
    function greetings(name) {
        return msg + ', ' + name + '!'
      }
    return greetings 
}

var gm = greet('Good Morning')
console.log(gm('Ajmain Nishu'))