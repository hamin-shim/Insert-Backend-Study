const http = require('http');
const fs = require('fs');
// const http = require('http2'); // https

console.log(http.STATUS_CODES);
console.log(http.METHODS);


const server = http.createServer((req, res) => {
    console.log('incoming...');
    console.log(req.headers);
    console.log(req.httpVersion);
    console.log(req.method);
    console.log(req.url);
    const url = req.url;
    res.setHeader('Content-Type', 'text/html');
    if(url === '/') {
        fs.createReadStream('./html/index.html').pipe(res);
    } else if (url === '/courses') {
        fs.createReadStream('./html/courses.html').pipe(res);
        // res.write('<html>');
        // res.write('<head><title>Academy</title></head>');
        // res.write('<body><h1>Courses<h1></body>');
        // res.write('</html>');
    } else {
        fs.createReadStream('./html/not-found.html').pipe(res);
        // res.write('<html>');
        // res.write('<head><title>Academy</title></head>');
        // res.write('<body><h1>Not Found<h1></body>');
        // res.write('</html>');
    }
    // res.write('Welcome!');
    // res.end();
});

server.listen(8080);