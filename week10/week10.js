//var canvas = document.getElementById('myCanvas');
//var context = canvas.getContext('2d');

//function writeMessage(canvas, message) {
//    var context = canvas.getContext('2d');
//    context.clearRect(0, 0, canvas.width, canvas.height);
//    context.font = '12pt Calibri';
//    context.fillStyle = 'black';
//    context.fillText(message, 10, 25);
//}

//function getMousePos(canvas, evt) {
//    var rect = canvas.getBoundingClientRect();
//    return {
//        x: evt.clientX - rect.left,
//        y: evt.clientY - rect.top
//    };
//}

//canvas.addEventListener('mousemove', function (evt) {
//    context.beginPath();
//    context.moveTo(mousePos.x, mousePos.y);
//    var mousePos = getMousePos(canvas, evt);
//    var message = 'Mouse position: ' + Math.floor(mousePos.x) + ',' + Math.floor(mousePos.y);
//    writeMessage(canvas, message);
//}, false);


//function changeColor(canvas, mousePos) {
//    context.beginPath();
//    context.moveTo(mousePos.x, mousePos.y);
//    context.fill();
//    context.fillStyle = 'black';
//}

//var canvas = document.getElementById('canvas'),
//    context = canvas.getContext('2d'),
//    repeatRadio = document.getElementById('repeatRadio'),
//    noRepeatRadio = document.getElementById('noRepeatRadio'),
//    repeatXRadio = document.getElementById('repeatXRadio'),
//    repeatYRadio = document.getElementById('repeatYRadio'),
//    image = new Image();

//function fillCanvasWithPattern(repeatString) {
//    var pattern = context.createPattern(image, repeatString);
//    context.clearRect(0, 0, canvas.width, canvas.height);
//    context.fillStyle = pattern;
//    context.fillRect(0, 0, canvas.width, canvas.height);
//    context.fill();
//};

//repeatRadio.onclick = function (e) {
//    fillCanvasWithPattern('repeat');
//};

//repeatXRadio.onclick = function (e) {
//    fillCanvasWithPattern('repeat-x');
//};

//repeatYRadio.onclick = function (e) {
//    fillCanvasWithPattern('repeat-y');
//};

//noRepeatRadio.onclick = function (e) {
//    fillCanvasWithPattern('no-repeat');
//};

//image.src = 'circle.png';
//image.onload = function (e) {
//    fillCanvasWithPattern('repeat');
//};

var canvas, ctx, flag = false,
    prevX = 0,
    currX = 0,
    prevY = 0,
    currY = 0,
    dot_flag = false;
var x = "red",
    y = 2;

function init() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext("2d");
    w = canvas.width;
    h = canvas.height;
    canvas.addEventListener("mousemove", function (pen) {
        findxy('move', pen)
    }, false);
    canvas.addEventListener("mousedown", function (pen) {
        findxy('down', pen)
    }, false);
    canvas.addEventListener("mouseup", function (pen) {
        findxy('up', pen)
    }, false);
    canvas.addEventListener("mouseout", function (pen) {
        findxy('out', pen)
    }, false);
}


function draw() {
    x = document.getElementById('colorChoice').value;
    ctx.beginPath();
    ctx.moveTo(prevX, prevY);
    ctx.lineTo(currX, currY);
    ctx.strokeStyle = x;
    ctx.lineWidth = y;
    ctx.stroke();
    ctx.closePath();
}

function erase() {
    ctx.clearRect(0, 0, w, h);
    document.getElementById("canvasImage").style.display = "none";
}

function findxy(res, e) {
    if (res == 'down') {
        prevX = currX;
        prevY = currY;
        currX = e.clientX - canvas.offsetLeft;
        currY = e.clientY - canvas.offsetTop;
        flag = true;
        dot_flag = true;
        if (dot_flag) {
            ctx.beginPath();
            ctx.fillStyle = x;
            ctx.fillRect(currX, currY, 2, 2);
            ctx.closePath();
            dot_flag = false;
        }
    }
    if (res == 'up' || res == "out") {
        flag = false;
    }
    if (res == 'move') {
        if (flag) {
            prevX = currX;
            prevY = currY;
            currX = e.clientX - canvas.offsetLeft;
            currY = e.clientY - canvas.offsetTop;
            draw();
        }
    }
}            


function play() {
    var v = document.getElementById('vid');
    if (v.paused) {
        v.play();
    } else {
        v.pause();
    }
}

function makeTheatre() {
    var v = document.getElementById('vid');
    var wid = document.getElementById('videoDiv').style.width.value;
    console.log(wid);
}