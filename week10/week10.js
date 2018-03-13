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

var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d'),
    repeatRadio = document.getElementById('repeatRadio'),
    noRepeatRadio = document.getElementById('noRepeatRadio'),
    repeatXRadio = document.getElementById('repeatXRadio'),
    repeatYRadio = document.getElementById('repeatYRadio'),
    image = new Image();

function fillCanvasWithPattern(repeatString) {
    var pattern = context.createPattern(image, repeatString);
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = pattern;
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.fill();
};

repeatRadio.onclick = function (e) {
    fillCanvasWithPattern('repeat');
};

repeatXRadio.onclick = function (e) {
    fillCanvasWithPattern('repeat-x');
};

repeatYRadio.onclick = function (e) {
    fillCanvasWithPattern('repeat-y');
};

noRepeatRadio.onclick = function (e) {
    fillCanvasWithPattern('no-repeat');
};

image.src = 'circle.png';
image.onload = function (e) {
    fillCanvasWithPattern('repeat');
};
