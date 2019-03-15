
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

$('.sendProgramCardButton').click(function() {
    var programCard = this.name;
    socket.emit('player_to_host', {
         messageType: "programCard",
         message: programCard
    });
});



// Test-Message von Hand: socket.emit('player_to_host', {messageType: "test", message: ""});
