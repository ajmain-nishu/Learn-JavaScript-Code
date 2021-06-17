//minimun to maximum by age sorting function with callback
var persons = [
    {
        name: 'A',
        age: 24
    },

    {
        name: 'B',
        age: 19
    },

    {
        name: 'C',
        age: 26
    },

    {
        name: 'D',
        age: 21
    }
]

persons.sort(function (a, b) {
    if (a.age > b.age) {
        return 1
    } else if (a.age < b.age) {
        return -1
    } else {
        return 0
    }
})

console.log(persons)