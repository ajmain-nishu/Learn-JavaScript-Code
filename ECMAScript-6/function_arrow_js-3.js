//arrow function and this keyword
let obj = {
    name: 'Ajmain Nishu',
    print: function () {
        setTimeout(() => {
            console.log(this)
            console.log(`Hello, ${this.name}`)
        }, 1000)
    }
}

obj.print()