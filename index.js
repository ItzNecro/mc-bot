var mineflayer = require('mineflayer');
const keep_alive = require('./keep_alive.js')

var host = "libercraft.net";
var port = 25565;
var username = "bla@example.com"
var password = "1r0nf@rmp@rty"
var moveinterval = 2; // 2 second movement interval
var maxrandom = 5; // 0-5 seconds added to movement interval (randomly)

// code start
var bot = mineflayer.createBot({
  host: "red.ploudos.com",
  port: 12172,
  username: "Police",
  version: "1.16.5"
});

var lasttime = -1;
var moving = 0;
var connected = 0;
var actions = [ 'forward', 'back', 'left', 'right']
var lastaction;
var pi = 3.14159;

var sleep = require('sleep');

function getRandomArbitrary(min, max) {
       return Math.random() * (max - min) + min;

}


bot.on('chat', function(username, message) {
  if (username === bot.username) return;
  console.log(message);
});
