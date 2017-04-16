var five = require('johnny-five');
var Raspi = require('raspi-io');

var board = new five.Board({
    io: new Raspi()
});

board.on('ready', function() {
    console.log('board is ready.');
    
    var relays = new five.Relays([
        'P1-11',
        'P1-12',
        'P1-13',
        'P1-15',
        'P1-16',
        'P1-18'
    ]);

    // switch on/off all relays 
    // every 2 seconds
    board.loop(2000, function() {
        relays.toggle();
    });

    // switch off all relays
    this.on('exit', function() {
        relays.off();
    });    
});
