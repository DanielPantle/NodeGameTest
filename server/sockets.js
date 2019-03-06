
var global = require("./../public/global/global_variables.js");


var hostId = "";
var playerIds = new Array();

var sockets = {};
sockets.init = function(server) {
    // socket.io setup
    var io = require('socket.io').listen(server);

    // Verbindung hergestellt
    io.sockets.on('connection', function(socket) {
        // Client wurde verbunden
        if(socket.handshake.query['clienttype'] == global.ClientType.HOST) {
            if(hostId == "") {
                // noch kein Host - Host wird akzeptiert
                console.log("host connected", socket.id);
                hostId = socket.id;
            }
            else {
                // schon ein Host registriert - neuen Host abweisen
                console.log("already one host registered.");
                socket.disconnect();
            }
        }
        else if(socket.handshake.query['clienttype'] == global.ClientType.PLAYER) {
            if(hostId == "") {
                // Kein Host registriert
                console.log("no host registered");
                socket.disconnect();
            }
            else {
                // Host registriert - Spieler wird akzeptiert
                console.log("player connected", socket.id);
                playerIds.push(socket.id);
            }
        }
        else {
            console.log("no handshake sent");
            socket.disconnect();
        }

        // Verbindung wurde getrennt
        socket.on('disconnect', function() {
            console.log('socket disconnected', socket.id);
            if(socket.id == hostId) {
                hostId = "";
                playerIds.forEach(function(playerId) {
                    if(io.sockets.sockets[playerId]) {
                        io.sockets.sockets[playerId].disconnect();
                    }
                });
            }
        });

        // Nachricht von einem Spieler zum Host
        socket.on('player_to_host', function(data) {
            console.log("message player to host", data);
            if(io.sockets.sockets[hostId]) {
                // Server fügt Spieler-ID hinzu
                data['id'] = socket.id;
                // Nachricht an Host
                io.sockets.sockets[hostId].emit('player_to_host', data);
            }
        });
    });
}

module.exports = sockets;
