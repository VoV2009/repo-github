import fs from 'fs';
import path from 'path';
const __dirname = import.meta.dirname;
//const fileName = path.join(__dirname, 'files', 'first.txt');
//const copiedfileName = path.join(__dirname, 'files', 'first-copy.txt');
const fileName = path.join('files', 'first.txt');
const copiedfileName = path.join('files', 'first-copy.txt');

const readStream = fs.createReadStream(fileName);
const writeStream = fs.createWriteStream(copiedfileName);
readStream.pipe(writeStream);
readStream.on('end', () => console.log('Read stream ended'));
writeStream.on('finish', () => console.log('File was copied'));
writeStream.on('close', () => console.log('Write stream closed'));
