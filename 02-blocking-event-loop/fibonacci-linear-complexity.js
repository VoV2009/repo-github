// 0,1,1,2,3,5,8,13,21,34,55
const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');
function info2(text) {
    console.log(text);
}
function info(text) {
    console.log(text, performance.now().toFixed(2));
}
setTimeout(() => info('Timeout'), 0);

const cache = new Map();
function fib(n) {
    if (n === 0 || n === 1) return n;
    let fib1 = 0,
        fib2 = 1,
        sum;
    for (let i = 1; i < n; i++) {
        sum = fib1 + fib2;
        fib1 = fib2;
        fib2 = sum;
    }
    return sum;
}
// heap limit Allocation failed - JavaScript heap out of memory
const fNumb = 1000000;
//info(`fibonacci(${fNumb}) = ${fib(fNumb)}`)
//fib(fNumb).then((res)=>info(`fibonacci(${fNumb}) = ${res}`))
info(`fibonacci(${fNumb}) = ${fib(fNumb)}`);
