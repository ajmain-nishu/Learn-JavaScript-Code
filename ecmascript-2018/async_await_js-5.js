//async await
let promises = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)]

async function promiseAll() {
    let result = await Promise.all(promises)
    console.log(result)
}

promiseAll()