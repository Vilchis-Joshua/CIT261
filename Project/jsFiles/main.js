var c = document.getElementById('canvas');
var ctx = c.getContext('2d');

var canvasWidth = c.width;
var canvasHeight = c.height;

var scl = 10;

var gameBoardWid = -canvasWidth / 2;
var gameBoardHei = canvasHeight / 2;
var snake;
var food;

function loop() {
    ctx.fillStyle = "#000000";
    ctx.fill(0, 0, canvasWidth, canvasHeight);

    // Snake stuff
    snake.die();
    snake.update();
    snake.show();

    // Food Stuff
    food.show();
    if (snake.eat(food.pos)) {
        food.pickLocation();
    }
}


function main() {
    snake = new Snake(ctx);
    food = new Food(ctx); 
    ctx.translate(canvasWidth / 2, canvasHeight / 2);
    food.pickLocation();
    setInterval(loop, 1000 / 30);

    console.log('canvasWidth = ' + canvasWidth);
    console.log('canvasHeight = ' + canvasHeight);

    console.log('gameBoardMin = ' + gameBoardWid);
    console.log('gameBoardMax = ' + gameBoardHei);
}


function checkKey(e) {
    e = e || window.event;
    if (e.keyCode === '38') {
        snake.direction(0, -1);
    } else if (e.keyCode === '40') {
        snake.direction(0, 1);
    } else if (e.keyCode === '39') {
        snake.direction(1, 0);
    } else if (e.keyCode === '37') {
        snake.direction(-1, 0);
    }
}
