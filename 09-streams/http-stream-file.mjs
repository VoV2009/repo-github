import http from 'http';
import fs from 'fs';
import path from 'path';
const __dirname = import.meta.dirname;
const PORT = 5000;
const filePath = path.join(__dirname, 'files', 'index.html');

const server = http.createServer((req, res) => {
    if (req.url === '/' && req.method === 'GET') {
        //const filePath =
        const readStream = fs.createReadStream(filePath);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        readStream.pipe(res);
    }
    if (req.url === '/no-stream' && req.method === 'GET') {
        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.end('Error reading file on server');
            } else {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html');
                res.end(data);
            }
        });
    }
});

server.listen(PORT, () => {
    console.log(`Server was launched on port ${PORT}`);
});
