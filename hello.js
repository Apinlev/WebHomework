const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('I am server =)');
}).listen(3000, () => console.log('Server working'));

