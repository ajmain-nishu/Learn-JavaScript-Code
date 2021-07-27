//async await
let p1 = new Promise(resolve => {
    setTimeout(resolve, 2000, 'Test Value')
})

async function myAsyncFunc() {
    let v = await p1
    console.log(v)
}

myAsyncFunc()