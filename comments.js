// create web server
// start web server
// open in browser

// 1. load http module
var http = require('http');

// 2. create web server
var server = http.createServer(function(req, res){
    console.log('request was made: ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hey ninjas');
});