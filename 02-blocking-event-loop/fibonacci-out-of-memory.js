// 0,1,1,2,3,5,8,13,21,34,55
const { rejects } = require('assert')
const fs = require('fs')
const { resolve } = require('path')
function info(text){console.log(text)}
setTimeout(()=>info('Timeout'))
function fib(n){
    return new Promise((resolve,reject)=>{
        if(n===0 || n === 1)
            return resolve (n)
        setImmediate(()=>
        Promise.all([fib(n-1),fib(n-2)])
            .then(([fib1,fib2]) => resolve(fib1+fib2))
        )
        //return fib(n-1)+fib(n-2)
    })
}
// heap limit Allocation failed - JavaScript heap out of memory
const fNumb=40
//info(`fibonacci(${fNumb}) = ${fib(fNumb)}`)
fib(fNumb).then((res)=>info(`fibonacci(${fNumb}) = ${res}`))