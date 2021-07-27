//aynchronous promise funtion
function getIphone(isPassed) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isPassed) {
                resolve('You have got an iPhone')
            } else {
                reject(new Error('You have failed'))
            }
        }, 2000)
    })
}

getIphone(true)
    .then((res) => {
        console.log(res)
    })
    .catch((e) => {
        console.log(e.message)
    })