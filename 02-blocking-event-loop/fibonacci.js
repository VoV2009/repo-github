// 0,1,1,2,3,5,8,13,21,34,55
const fs = require('fs')
function info(text){console.log(text)}
setTimeout(()=>info('Timeout'))
function fib(n){
    if(n===0 || n === 1)
        return n
    return fib(n-1)+fib(n-2)
}
const fNumb=40
info(`fibonacci(${fNumb}) = ${fib(fNumb)}`)