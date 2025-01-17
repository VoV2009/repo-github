//console.log(arguments.callee.toString(♦));
import { season, temperature } from './named-exports.mjs';
import { humidity, isRaining } from './inline-exports.mjs';
import usersArray from './users.mjs';
import getDataFromServer from './default-export.mjs';
import myDEFAULT_SERVER, {
    USERNAME as myUSERNAME,
    PASSWORD,
} from './mixed-exports.mjs';
// console.log(season);
// console.log(temperature);
// console.log(humidity);
// console.log(isRaining);
// console.log(usersArray);
getDataFromServer('https://jsonplaceholder.typicode.com/posts/22')
    .then((posts) => console.log(posts))
    .catch((error) => console.error(error));

console.log(myDEFAULT_SERVER);
console.log(myUSERNAME, PASSWORD);
