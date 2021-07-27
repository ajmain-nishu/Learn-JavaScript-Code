//Promise delay method
const delay = s => new Promise(resolve => setTimeout(resolve, s * 1000))

delay(2).then(() => console.log('2 Seconds Delay'))
delay(1).then(() => console.log('1 Seconds Delay'))
delay(3).then(() => console.log('3 Seconds Delay'))
delay(2).then(() => console.log('2 Seconds Delay'))
delay(5).then(() => console.log('5 Seconds Delay'))