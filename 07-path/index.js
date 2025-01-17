const path = require('path');
//const filepath  = '\Users\VoV_7\Desktop\Node\07-path\index.js'
const filePath = '/Users/VoV_7/Desktop/Node/index.js';
const textFilePath = '/Users/VoV_7/Desktop/file.txt';
const relativePath = './node/movie.mov';
const directoryPath = '.node/subfolder';
console.log(path.isAbsolute(filePath));
console.log(path.isAbsolute(relativePath));
console.log(path.basename(filePath));
console.log(path.basename(directoryPath));

console.log(path.dirname(filePath));
console.log(path.dirname(directoryPath));

console.log(path.resolve(relativePath));
console.log(path.extname(textFilePath));
const parsedPath = path.parse(filePath);
console.log(parsedPath);
console.log(filePath);
console.log(path.join(parsedPath.dir, `renamed-${parsedPath.name}.mjs`));
