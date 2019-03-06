
$('#inputSubscriptionButton').click(function() {
    socket.emit('player_to_host', {
         messageType: "subscribe",
         name: $('#inputSubscriptionName').val()
    });
});

$('#inputTestButton').click(function() {
    socket.emit('player_to_host', {
         messageType: "test",
         message: $('#inputTestMessage').val()
    });
});



// Test-Message von Hand: socket.emit('player_to_host', {messageType: "test", message: ""});
