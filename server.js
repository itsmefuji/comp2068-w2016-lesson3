/// <reference path = "_reference.ts" />
//HOW TO GET EXPRESS 
var express = require('express');
var app = express();
var port = process.env.port || 3000;
app.get('/', function (req, res) {
    res.send('Hello Express');
    res.sendFile('./Public/index.html');
});
app.get('/info', function (req, res) {
    res.send('Your custom Info Page goes here');
});
app.listen(port, function () {
    console.log("Server Started... Listening on port:" + port);
});
/*
//HOW TO GET NODE
import http = require('http');

var port:number = process.env.port || 3000;

var server:http.Server = http.createServer(
    function(req:http.ServerRequest,res:http.ServerResponse)
    {
        res.writeHead(200,{'Content-Type': 'text/plain'});
        res.end("Hello Node!");
    }
);

server.listen(port, function()
    {
        console.log("Server Started... Listening on port:" + port);
    }
);
*/ 
//# sourceMappingURL=server.js.map