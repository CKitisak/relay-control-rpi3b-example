var five = require('johnny-five');
var Raspi = require('raspi-io');

var board = new five.Board({
    io: new Raspi()
});

board.on('ready', function() {
    console.log('board is ready.');
    var relay = new five.Relay('P1-11');

    relay.on();

    setTimeout(function() {
        relay.off();
    }, 3000);

    this.repl.inject({
        relay: relay
    });
});
