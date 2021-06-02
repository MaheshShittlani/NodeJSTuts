const EventEmitter = require('events');

const celebrity = new EventEmitter();

celebrity.on('race win', () => {
    console.log('Congratulations! you have win the race');
});

celebrity.on('race win', () => {
    console.log('Woo hoo!!! I can do the better');
})

process.on('exit', (code) => {
    console.log(`About to exit with code: ${code}`);
})

celebrity.emit('race win');

