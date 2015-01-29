var http = require('http');
var ecstatic = require('ecstatic');


var server = http.createServer(
    ecstatic({ root: __dirname})
);
server.listen(8080)

console.log('Listening on :8080');
