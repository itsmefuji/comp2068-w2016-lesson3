/// <reference path = "_reference.ts" />

//HOW TO GET EXPRESS 
import express = require('express'); 

var app:express.Express = express();

var port:number = process.env.port || 3000; 

app.get('/', function(req:express.Request, res:express.Response)
    {
        res.send('Hello Express'); 
        res.sendFile('./Public/index.html'); 
    }
); 

app.get('/info', function(req:express.Request, res:express.Response)
    {
        res.send('Your custom Info Page goes here'); 
    }
);

app.listen(port, function()
    {
        console.log("Server Started... Listening on port:" + port); 
    }
); 


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