const __dirname = import.meta.dirname;
//import dotenv, { config } from 'dotenv';
//import * as dotenv from 'dotenv';
//console.log(dotenv.default);
//dotenv.config({ path: `${__dirname}/.env` });
import { config } from 'dotenv';
//console.log(config);
config({ path: `${__dirname}/.env` });

console.log(process.env.DB_USERNAME);
console.log(process.env.DB_URL);
