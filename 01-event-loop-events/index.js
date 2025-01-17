const fs = require('fs')
const dns = require('dns')
function info(text){ console.log(text, performance.now().toFixed(2)) }
info('Program start');
// Close events
fs.writeFile('01-event-loop-events\\my_test.txt', 'Hello Node.js', ()=>info('File written'))
// Promises
Promise.resolve().then(()=>info('Promise 1'))
// Next tick
process.nextTick(()=>info('Next tick 1'))
// Immediate (Check)
setImmediate(()=>info('Immediate 1'))
// Timeouts
setTimeout(()=>info('Timeout 1'),0)
setTimeout(()=>{
    process.nextTick(()=>info('Next tick 2'))
    info('Timeout 2')
},120)
// Intervals
let intervalCount=0
const intervalId = setInterval(()=>{
    info(`Interval ${intervalCount+=1}`)
    if(intervalCount===2) clearInterval(intervalId)
},100)
// I/O Events
dns.lookup('localhost',(err,address,family)=>{
    info('DNS 1 localhost')
    Promise.resolve().then(()=>info('Promise 2'))
    process.nextTick(()=>info('Next tick 3'))
})
info('Program end');