const http = require('http');
const {
    getHTML,
    getTEXT,
    getCOMMENTS,
    getHome,
    handleNotFound,
    postCOMMENT,
} = require('./handlers');
const PORT = 5000;

const server = http.createServer((req, res) => {
    //console.log(req);
    if (req.method === 'GET' && req.url === '/') {
        return getHome(req, res);
    }
    if (req.method === 'GET' && req.url === '/html') {
        return getHTML(req, res);
    }
    if (req.method === 'GET' && req.url === '/text') {
        return getTEXT(req, res);
    }
    if (req.method === 'GET' && req.url === '/comments') {
        return getCOMMENTS(req, res);
    }
    if (req.method === 'POST' && req.url === '/comments') {
        return postCOMMENT(req, res);
    }
    handleNotFound(req, res);
});
server.listen(PORT, () => {
    console.log(`Server was launched on port ${PORT}`);
});
