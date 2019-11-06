var PORT = process.env.PORT || 5000;
var express = require('express');
var app = express();

var http = require('http');
var server = http.Server(app);

app.use(express.static('chat-client'));

server.listen(PORT, function() {
  console.log('User Feedabck services running');
});

var io = require('socket.io')(server);

io.on('connection', function(socket) {
  socket.on('message', function(msg) {
    io.emit('message', msg);
  });
});

// var PORT = process.env.PORT || 5000;
// var http = require('http');
//
// http.createServer(function(request, response) {
//     response.writeHead(200, {"Content-Type": "text/plain"});
//     response.end("Hello World!\n");
// }).listen(PORT);
