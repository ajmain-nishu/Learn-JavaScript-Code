//generate custom error using throw and how to try catch works
try {
    console.log('I am Line 1')
    throw new Error('I am Error')
    console.log('I am Line 2')
    console.log('I am Line 3')
} catch(e) {
    console.log(e.message)
}