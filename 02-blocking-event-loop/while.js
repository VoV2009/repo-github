const fs = require('fs')
const isRunning=true

setTimeout(()=>isRunning=false,10)
process.nextTick(()=>console.log('Next tick'))
while(isRunning){
    console.log('while loop is running...')
}