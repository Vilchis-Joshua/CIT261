var snake;
var scl = 20;
var food;

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
    direction = pickLocation();

    food.make(direction.x, direction.y);
    console.log(direction.x, direction.y);
}

function pickLocation() {
    var cols = floor(width / scl);
    var rows = floor(height / scl);
    direction = createVector(floor(random(cols), floor(random(rows))));
    direction.mult(scl);

    return direction;
}

function draw() {
    background(51);
    snake.update();
    snake.show();
    food.show();
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


