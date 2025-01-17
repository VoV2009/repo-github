const fs = require('fs');
const path = require('path');
const fileName = 'file.txt';
/*const fileName = './first.txt';
const fileNameRen = './renamed-first.txt';
const dataToWrite = 'First file text';
const dataToAppend = '\nOne more line';*/
const fileDel = __dirname + '\\' + fileName;
console.log(fileDel);
fs.unlink(fileDel, (err) => {
    if (err) console.log(err);
    else console.log(fileDel, ' deleted');
});
/*
fs.writeFile(fileName, dataToWrite, (err) => {
    if (err) console.log(err);
    else {
        console.log(dataToWrite, ' was written');
        fs.appendFile(fileName, dataToAppend, (err) => {
            if (err) console.log(err);
            else {
                console.log('Appended text to the ', fileName, ' file');
                fs.rename(fileName, fileNameRen, (err) => {
                    if (err) console.log(err);
                    else console.log('File was renamed');
                });
            }
        });
    }
});
*/
