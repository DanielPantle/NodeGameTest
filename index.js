
var app = require('./server/app.js');
var sockets = require('./server/sockets.js');


var server = app.listen(app.get('port'), () => {
    console.log('Example app listening on port ' + app.get('port') + '!')
});

sockets.init(server);
