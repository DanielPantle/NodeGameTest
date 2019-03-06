

var socket = io('', {query: 'clienttype=' + global.ClientType.PLAYER});

socket.on('connect', function() {
    $('#output').text("connected");
});

socket.on('disconnect', function() {
    $('#output').text("disconnected");
});
