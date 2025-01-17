import stream, { Transform } from 'stream';
import fs from 'fs';
import { console } from 'inspector';
/*import path from 'path';
const __dirname = import.meta.dirname;
const filePath = path.join(__dirname, 'files', 'index.html');*/
//const filePath = './files/stdin-dump.txt';
//console.log(process);
//console.log(process.env['COMPUTERNAME']);
//const writeStream = fs.createWriteStream(filePath);
//process.stdin.pipe(process.stdout);
//process.stdin.pipe(writeStream);
const upperCaseStream = new Transform({
    transform: function (chunk, encodding, cb) {
        const upperCased = chunk.toString().toUpperCase();
        //console.log(upperCased);
        cb(null, upperCased);
    },
});
const reverseStream = new Transform({
    transform(chunk, encodding, cb) {
        const arrayOfChars = chunk.toString().split('');
        const lastChar = arrayOfChars.pop();
        const reversed = arrayOfChars.reverse().concat(lastChar).join('');
        //console.log(upperCased);
        cb(null, reversed);
    },
});

process.stdin.pipe(upperCaseStream).pipe(reverseStream).pipe(process.stdout);
