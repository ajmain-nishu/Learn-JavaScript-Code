//object destructuring
let person = {
    name: 'Ajmain Nishu',
    email: 'ajmainnishu@gmail.com',
    address: {
        city: 'Thakurgaon',
        country: 'Bangladesh'
    }
}

let {name, email, address, address: {city, country}} = person
console.log(name, email, address, city, country)