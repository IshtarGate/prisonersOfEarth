// Get Canvas Vars
var math = require('math');
var c = document.getElementById("myCanvas");
var ctx = c.getContext('2d');
/* Set up Game */


var Game = { };
Game.width = ctx.canvas.width;
Game.height = ctx.canvas.height;
Game.fps = 50;
Game.playerPos = {};
Game.playerPos.x = Game.width/2;
Game.playerPos.y = Game.height/2;


/* Game Logic */
Game.update = function(){
    Game.playerPos.x+=1;
    Game.playerPos.y+=1;
};


/* Draw */
Game.draw = function(){
    ctx.clearRect(0, 0, Game.width, Game.height);

    ctx.beginPath();
    ctx.fillRect(Game.playerPos.x, Game.playerPos.y,10,10);
    ctx.closePath();
};


/* Main Loop Function */
Game.run = function() {
    Game.update();
    Game.draw();
};


// Start the game loop
Game._intervalId = setInterval(Game.run, 1000 / Game.fps);


/* Extra functions */
function  getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect(), // abs. size of element
        scaleX = canvas.width / rect.width,    // relationship bitmap vs. element for X
        scaleY = canvas.height / rect.height;  // relationship bitmap vs. element for Y

    return {
        x: (evt.clientX - rect.left) * scaleX,   // scale mouse coordinates after they have
        y: (evt.clientY - rect.top) * scaleY     // been adjusted to be relative to element
    }
}