const EventEmitter = require('events');

const celebrity = new EventEmitter();

celebrity.on('race', (result) => {
    if(result === 'win') {
        console.log('Congratulations! you have win the race');
    } else if(result==='lost') {
        console.log('Don\'t be nervous, better luck next time');
    }
});

celebrity.on('race', (result) => {
    if(result === 'win') {
        console.log('Woo hoo!!! I can do the better');
    } else if(result === 'lost') {
        console.log('Keep trying, you need to learn more.');
    }
})

process.on('exit', (code) => {
    console.log(`About to exit with code: ${code}`);
})

celebrity.emit('race','win');
celebrity.emit('race','lost');
celebrity.emit('race','win');

