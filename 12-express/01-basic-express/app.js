//const http = require('http');
const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Response from express'));
app.listen(5000, () => console.log('Server was starter on port 5000'));

/*const server = http.createServer(app);
// (req, res) => {
//     res.end('Response from the server');
// });
server.listen(5000, () => console.log('Server was starter on port 5000'));
*/
