var c = document.getElementById('canvas');
var ctx = new cs312Context(c, ctx);
var canvasWidth = c.width;
var canvasHeight = c.height;
var scl = 10;
document.onkeydown = checkKey;

var gameBoardWid = -canvasWidth / 2;
var gameBoardHei = canvasHeight / 2;
var snake;
var food;

function loop() {
    ctx.fillStyle = "#000000";
    //ctx.fill(0, 0, gameBoardWid, gameBoardHei);

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
    ctx.translate(canvasWidth / 2, canvasHeight / 2);
    snake = new Snake(ctx);
    food = new Food(ctx);
    setInterval(loop, 1000 / 30);
    food.pickLocation();
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
