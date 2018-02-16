var c = document.getElementById('canvas');
var ctx = c.getContext('2d');

//Player values
var player1 = new Player(ctx, 1);
var player2 = new Player(ctx, 2);

//ballx - ballRadius / 2, bally - ballRadius / 2, ballRadius, ballRadius);
var radius = 6;
var ball = new Ball(ctx, 50, 50, radius);

var game = new Game(false, ctx);

var pong;
var paddle;

var aiSpeed = 2;


function main() {
    ctx.translate(c.width, c.height);
    setInterval(loop, 1000 / 30);
    //c.addEventListener('mousemove', function (e) {
    //    player1.getValue() = e.clientY - height / 2;
    //})
}

function draw() {
    player1.draw();
    player2.draw();
    ball.draw();
}


function move() {

}


function loop() {
    move();
    draw();
}

function start() {
    game.start();
}

function stop() {
    game.stop();
}


function drawCircle(mat, pos, radius, color) {
    var finalMat = new Matrix();

    if (mat != null)
        finalMat.multiply(mat);

    // apply context matrixes to poin ts
    finalMat.multiply(this.translateMat);

    pos.applyMatrix(finalMat);

    this.ctx.beginPath();
    this.ctx.strokeStyle = color;
    this.ctx.arc(pos.x, pos.y, radius, 0, 2 * Math.PI, false);
    this.ctx.stroke();
}

/****************************************************************************
 * get random value as a float
 ***************************************************************************/
function getRandomFloat(min, max) {
    return ((Math.random() * (max - min)) + min);
}

//function update() {
//    ballx += ballXVelocity;
//    bally += ballYVelocity;
//    if (bally < 0 && ballYVelocity < 0) {
//        ballYVelocity = -ballYVelocity;
//    }
//    if (bally > c.height && ballYVelocity > 0) {
//        ballYVelocity = -ballYVelocity;
//    }
//    if (ballx < 0) {
//        if (bally > player1 && bally < player1 + height) {
//            ballXVelocity = -ballXVelocity;
//            var dy = bally - (player1 + height / 2);
//            ballYVelocity = dy * 0.3;
//        } else {
//            player2Score++;
//            reset();
//        }
//    }
//    if (ballx > c.width) {
//        if (bally > player2 && bally < player2 + height) {
//            ballXVelocity = -ballXVelocity;
//            var dy = bally - (player1 + height / 2);
//            ballYVelocity = dy * 0.3;
//        } else {
//            player1Score++;
//            reset();
//        }
//    }

//    if (player2 + height / 2 < bally) {
//        player2 += aiSpeed;
//    } else {
//        player2 -= aiSpeed;
//    }
//    ctx.fillStyle = 'black';
//    ctx.fillRect(0, 0, c.width, c.height);
//    ctx.fillStyle = 'white';
//    ctx.fillRect(0, player1, thickness, height);
//    ctx.fillStyle = 'white';
//    ctx.fillRect(c.width - thickness, player2, thickness, height);
//    ctx.fillRect(ballx - ballRadius / 2, bally - ballRadius / 2, ballRadius, ballRadius);
//    ctx.fillText(player1Score, 100, 100);
//    ctx.fillText(player2Score, c.width - 100, 100);

//    if (player1Score == 1) {
//        ctx.fillText(("Player 1 is the winner!"), c.width / 2, c.height / 2);
//        stop()
//    } else if (player2Score == 1) {
//        ctx.fillText(("Player 2 is the winner!"), c.width / 2, c.height / 2);
//        stop();
//    }
//}


//function reset() {
//    ballx = c.width / 2;
//    bally = c.height / 2;
//    ballXVelocity = -ballXVelocity;
//    ballYVelocity = 3;
//}


//function stop() {
//    isPlay = 0;
//}


//function start() {
//    isPlay = 1;
//    main();
//}

//var c = document.getElementById('canvas');
//var ctx = c.getContext('2d');

////Player values
//var player1 = 40;
//var player2 = 40;

//var player1Score = player2Score = 0;

//var thickness = 8;
//var height = 70;
//var ballx = bally = 50;
//var ballRadius = 6;
//var ballXVelocity = ballYVelocity = 4;

//var canvasWidth = c.width;
//var canvasHeight = c.height;

//var scl = 10;

//var gameBoardWid = -canvasWidth / 2;
//var gameBoardHei = canvasHeight / 2;
//var pong;
//var paddle;

//var aiSpeed = 2;


//function main() {
//    setInterval(update, 1000 / 30);
//    c.addEventListener('mousemove', function (e) {
//        player1 = e.clientY - height / 2;
//    })
//}

//function update() {
//    ballx += ballXVelocity;
//    bally += ballYVelocity;
//    if (bally < 0 && ballYVelocity < 0) {
//        ballYVelocity = -ballYVelocity;
//    }
//    if (bally > c.height && ballYVelocity > 0) {
//        ballYVelocity = -ballYVelocity;
//    }
//    if (ballx < 0) {
//        if (bally > player1 && bally < player1 + height) {
//            ballXVelocity = -ballXVelocity;
//            var dy = bally - (player1 + height / 2);
//            ballYVelocity = dy * 0.3;
//        } else {
//            player2Score++;
//            reset();
//        }
//    }
//    if (ballx > c.width) {
//        if (bally > player2 && bally < player2 + height) {
//            ballXVelocity = -ballXVelocity;
//            var dy = bally - (player1 + height / 2);
//            ballYVelocity = dy * 0.3;
//        } else {
//            player1Score++;
//            reset();
//        }
//    }

//    if (player2 + height / 2 < bally) {
//        player2 += aiSpeed;
//    } else {
//        player2 -= aiSpeed;
//    }
//    ctx.fillStyle = 'black';
//    ctx.fillRect(0, 0, c.width, c.height);
//    ctx.fillStyle = 'white';
//    ctx.fillRect(0, player1, thickness, height);
//    ctx.fillStyle = 'white';
//    ctx.fillRect(c.width - thickness, player2, thickness, height);
//    ctx.fillRect(ballx - ballRadius / 2, bally - ballRadius / 2, ballRadius, ballRadius);
//    ctx.fillText(player1Score, 100, 100);
//    ctx.fillText(player2Score,c.width - 100, 100);
//}


//function reset() {
//    ballx = c.width / 2;
//    bally = c.height / 2;
//    ballXVelocity = -ballXVelocity;
//    ballYVelocity = 3;

//    console.log('here');
//}