import fs from 'fs';
import path from 'path';
// How to run programm: node createfile.mjs <fileName> <linesQty>
//console.log(process.argv);
//console.log(process.argv.length());
if (!process.argv[2] || !process.argv[3]) {
    console.log('Filename and lines qty must be supplied as arguments');
    process.exit(0);
}
//console.log('continue');
const fileName = process.argv[2];
const linesQty = parseInt(process.argv[3]);
if (isNaN(linesQty)) {
    console.log('Lines qty must be a number');
    process.exit(0);
}

//const __dirname = import.meta.dirname;
//const filePath = path.join(__dirname, 'files', 'index.html');
const writeStream = fs.createWriteStream(path.join('files', fileName));
for (let i = 0; i < linesQty; i++) {
    writeStream.write(
        `This is a line number ${i} in the automatical generated file\n`
    );
}
writeStream.end(() => {
    console.log(`Automatically generated file ${fileName} was created!`);
});
