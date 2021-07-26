//asynchronous programming output problem
function sayMyName(name) {
    let result
    setTimeout(() => {
        result = name
    }, 3000);
    return result
}

let output = sayMyName('Ajmain Nishu')
console.log(output)