//const path = require('path');
//console.log(path.basename(__dirname));
//console.log(module.path);
//path.resolve(__dirname, './.env');
//const fn_env = path.resolve(__dirname, './.env');
//path.resolve('c:\\Users\\VoV_7\\Desktop\\Node\\11-env', '.env');
//console.log(fn_env);
//require('dotenv').config({ path: fn_env });
require('dotenv').config({ path: `${__dirname}/.env` });
console.log(process.env);
