import fs from 'fs';
import path from 'path';

const __dirname = import.meta.dirname;
//const fileName = path.join(__dirname, 'files', 'first.txt');
//const copiedfileName = path.join(__dirname, 'files', 'first-copy.txt');
//const fileName = path.join('files', 'first.txt');
//const copiedfileName = path.join('files', 'first-copy.txt');
const sourceDir = path.join(__dirname, 'files'); //'./files';
const destinationDir = path.join(__dirname, 'copied-files'); //'./copied-files';
//const sourceDir = './files';
//const destinationDir = './copied-files';

if (!fs.existsSync(sourceDir)) {
    console.warn(`Source dir ${sourceDir} doesn't exist in ${__dirname}!`);
    console.log('Exiting...');
    process.exit(0);
}
if (fs.existsSync(destinationDir)) {
    fs.rmSync(destinationDir, { recursive: true });
    console.log('destination dir removed');
}
fs.mkdirSync(destinationDir);
fs.readdir(sourceDir, (err, fileNames) => {
    if (err) {
        console.log(err);
        process.exit(1);
    }
    fileNames.forEach((fileName, index) => {
        const sourceFilePath = path.join(sourceDir, fileName);
        const destinationFilePath = path.join(
            destinationDir,
            `${index + 1}.${fileName}`
        );
        //console.log(`sourceFilePath=${sourceFilePath}, destinationFilePath=${destinationFilePath}, File ${fileName}`);
        const readFileStream = fs.createReadStream(sourceFilePath);
        const writeFileStream = fs.createWriteStream(destinationFilePath);
        readFileStream.pipe(writeFileStream);
        writeFileStream.on('finish', () => {
            console.log(`File ${fileName} was copied`);
        });
    });
});

/*
const readStream = fs.createReadStream(fileName);
const writeStream = fs.createWriteStream(copiedfileName);
readStream.pipe(writeStream);
readStream.on('end', () => console.log('Read stream ended'));
writeStream.on('finish', () => console.log('File was copied'));
writeStream.on('close', () => console.log('Write stream closed'));
*/
