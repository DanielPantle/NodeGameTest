const express = require('express');
const socket = require('socket.io');
const app = express();

var path = require('path');
var port = process.env.PORT || 8000;

app.use(express.static(path.join(__dirname, 'public')));


var server = app.listen(port, () => {
  console.log('Example app listening on port ' + port + '!')
});

socket(server).on('connection', function(socket) {
    console.log('socket connected', socket.id);

    socket.on('disconnect', function() {
        console.log('socket disconnected', socket.id);
    });

    socket.on('chat', function(data) {
        server.io.sockets.emit('chat', data);
    });
});
