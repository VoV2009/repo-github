//console.log(arguments.callee.toString());
//console.log(__dirname, __filename);
//console.log(module);
//console.log(module.path);
//console.log(require);
/*
function printHello() {
    console.log('Hello world');
}
module.exports.prnHello = printHello;
exports.prn2Hello = function () {
    console.log('Hello world2');
};
module.exports.prn3Hello = () => {
    console.log('Hello world3');
};
// перезапись объекта - остается всего одна экспортируемая функция из модуля
module.exports = function () {
    console.log('1 func Hello world');
};
*/
// const { URL, USERNAME, PASSWORD } = require('./constants');
// //function info(text){ console.log(text, performance.now().toFixed(2)) }
// function info(text) {
//     console.log(text);
// }
// info(URL);
const exportedObject = require('./multiple-export');
const {
    myName: myOtherName,
    myFriendsName,
    myGreatHobbies,
} = require('./export-and-import');

const greetingFn = require('./my-modules/single-export');
//const greetingFn = require('.\\single-export');
//const greetingFn = require('c:/Users/VoV_7/Desktop/Node/03-commonjs-modules/single-export.js');
//const greetingFn = require('c:\\Users\\VoV_7\\Desktop\\Node\\03-commonjs-modules\\single-export.js');

const { myName, myHobbies, myFavoritNumber } = exportedObject;
console.log(myName);
console.log(myHobbies);
console.log(myFavoritNumber);

myHobbies.push('climbing');

greetingFn(myName);
console.log(myOtherName);
console.log(myFriendsName);
console.log(myGreatHobbies);
//greetingFn(myNamec:\Users\VoV_7\Desktop\Node\03-commonjs-modules\single-export.jse);
