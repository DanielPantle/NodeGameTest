
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

$('.addProgramCardButton').click(function() {
    $('#programCardList').append('<label>' + this.name + '</label><br />');
});
$('#removeProgramCards').click(function() {
    $('#programCardList').empty();
});

$('#sendProgramCardsButton').click(function() {
    var programCards = [];
    $('#programCardList label').each(function(i) {
        programCards.push($(this).text());
    });

    socket.emit('player_to_host', {
         messageType: "programCard",
         message: programCards.toString()
    });
    $('#programCardList').empty();
});



// Test-Message von Hand: socket.emit('player_to_host', {messageType: "test", message: ""});
