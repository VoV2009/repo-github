const { json } = require('stream/consumers');
const comments = require('./data');
const path = require('path');
const qs = require('querystring');
const fs = require('fs');
//  './files/comment-form.html'
const formFileName = path.join(__dirname, 'files', 'comment-form.html');
//'.\\files\\comment-form.html';
//    'c:\\Users\\VoV_7\\Desktop\\Node\\08-http\\files\\comment-form.html';

function getHome(req, res) {
    fs.readFile(formFileName, (err, data) => {
        if (err) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'text/plain');
            res.end('Server error while loading HTML file');
        } else {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end(data);
        }
    });
}
function getHTML(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write('<html><body><div>');
    res.write('<h1>Greetings from the HTTP server!</h1>');
    res.write('</html></body></div>');
    res.end('');
}
function getTEXT(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    //'Greetings from the HTTP server, this is plain text!'
    res.end(`dirname:<${__dirname}>`);
}

function getCOMMENTS(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(comments));
}
function postCOMMENT(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    if (req.headers['content-type'] === 'application/x-www-form-urlencoded') {
        let body = '';
        req.on('data', (chunk) => {
            body += chunk.toString();
        });

        req.on('end', () => {
            try {
                const comment = qs.parse(body);
                comments.push(comment);
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html');
                res.write('<h1>Comment data received</h1>');
                res.write('<a href="/">Submit one more comment</a>');
                //res.end('Comment data received');
                res.end();
            } catch (error) {
                res.statusCode = 400;
                res.end('Invalid Form data');
            }
        });
    } else if (req.headers['content-type'] === 'application/json') {
        let newComment = '';
        req.on('data', (chunk) => (newComment += chunk));

        req.on('end', () => {
            //console.log(comment);
            try {
                comments.push(JSON.parse(newComment));
                res.statusCode = 200;
                res.end('Comment data received');
            } catch (error) {
                res.statusCode = 400;
                res.end('Invalid JSON');
            }
        });
    } else {
        res.statusCode = 400;
        res.end('Data must be in the JSON format');
    }
}
function handleNotFound(req, res) {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Page not found!</h1>');
}

module.exports = {
    getHTML,
    getTEXT,
    getCOMMENTS,
    getHome,
    postCOMMENT,
    handleNotFound,
};
