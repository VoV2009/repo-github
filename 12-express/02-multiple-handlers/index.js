//const http = require('http');
const express = require('express');
const app = express();
const firstHandler = (req, res, next) => {
    console.log('First handler');
    next();
};
const secondHandler = (req, res) => {
    console.log('Second handler');
    res.send('Response from express');
};
app.get('/', firstHandler, secondHandler);
app.listen(5000, () => console.log('Server was starter on port 5000'));

/*const server = http.createServer(app);
// (req, res) => {
//     res.end('Response from the server');
// });
server.listen(5000, () => console.log('Server was starter on port 5000'));
*/
