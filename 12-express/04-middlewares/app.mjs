import express from 'express';
import morgan from 'morgan';
//import qs from 'querystring';
const app = express();
// const logger = (req, res, next) => {
//     console.log(req.method, req.path);
//     next();
// };
//app.use(logger);

//app.use(logger, (req, res) => res.send('This is express server'));
// logs info about request
app.use(morgan('tiny'));
// convert JSON to JS Object in POST, PUT, PATCH request
app.use(express.json());
//            /\
//            ||
// app.use((req, res, next) => {
//     let data = '';
//     req.on('data', (chunk) => (data += chunk));
//     req.on('end', () => {
//         const parsedJSON = JSON.parse(data);
//         req.body = parsedJSON;
//         next();
//     });
// });
// convert form data to JS Object in POST, PUT, PATCH request
app.use(express.urlencoded({ extended: true }));
//                  /\
//                  ||
// app.use((req, res, next) => {
//     //    console.log(req);
//     //    console.log(req.headers['content-type']);
//     if (req.headers['content-type'] === 'application/x-www-form-urlencoded') {
//         let data = '';
//         req.on('data', (chunk) => (data += chunk.toString()));
//         req.on('end', () => {
//             req.body = qs.parse(data);
//             next();
//         });
//     } else {
//         next();
//     }
// });
app.use((req, res) => {
    console.log(req.body);
    return res.send('This is express server');
});

app.listen(5000, () =>
    console.log(`Server is listening ${Date().toLocaleString()} at port 5000`)
);
