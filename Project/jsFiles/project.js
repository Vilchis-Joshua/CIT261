var snake;
var food;
var scl = 20;
var dir;
var f;

function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("displayPaper").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "MalwareResearch.txt", true);
    xhttp.send();
}


function setup() {
    createCanvas(600, 600);
    frameRate(10);

    snake = new Snake();
    food = new Food();
    food.pickLocation();
}

function draw() {
    background(51);

    snake.die();
    snake.update();
    snake.show();

    food.show();

    if (snake.eat(food.pos)) {
        food.pickLocation();
    } 
}


function keyPressed() {
    if (keyCode === UP_ARROW) {
        snake.direction(0, -1);
    } else if (keyCode === DOWN_ARROW) {
        snake.direction(0, 1);
    } else if (keyCode === RIGHT_ARROW) {
        snake.direction(1, 0);
    } else if (keyCode === LEFT_ARROW) {
        snake.direction(-1, 0);
    }
}


