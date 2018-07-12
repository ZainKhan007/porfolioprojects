var express = require("express");
var socket = require("socket.io");
// Setup
var app = express();
var server = app.listen(3000,function() {
  console.log("Server is up");
});
// Static files
app.use(express.static('public'));

var io = socket(server);

io.on('connection',function(socket) {
  socket.on('chat',function(data) {
    io.sockets.emit('chat',data);
  })
  socket.on('typing',function(data) {
    socket.broadcast.emit('typing',data);
  })
})
