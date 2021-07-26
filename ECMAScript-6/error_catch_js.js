//catch binding
try {
    console.log('I am Line 1')
    throw new Error('I am Error')
    console.log('I am Line 2')
    console.log('I am Line 3')
} catch {
    console.log('This is custom error message')
}