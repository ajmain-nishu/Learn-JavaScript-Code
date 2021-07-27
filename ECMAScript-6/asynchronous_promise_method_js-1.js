//reject value output using promise method
let p1 = Promise.reject('Reject')
p1.catch(e => console.log(e))