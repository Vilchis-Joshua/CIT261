var y = 0;
var a = 0;
var b = 0;
var c = 0;

function init() {
    x = document.getElementById('box');
}

function makeSkew() {
    //x = document.getElementById('box');

    if (a == 0) {
        x.style.transform = 'skewY(25deg)';
        a = 1;
    } else if (a == 1) {
        x.style.transform = 'skewY(50deg)';
        a = 2;
    } else {
        x.style.transform = 'none';
        a = 0
    }
}


function makeRotate() {
    //x = document.getElementById('box');

    if (y == 0) {
        x.style.transform = 'rotate(25deg)';
        y = 1;
    } else if (y == 1) {
        x.style.transform = 'rotate(50deg)';
        y = 2;
    } else if (y == 2) {
        x.style.transform = 'rotate(75deg)';
        y = 3;
    } else {
        x.style.transform = 'rotate(100deg)';
        x.style.transform = 'rotate(0deg)';
        y = 0;
    }
}

function onScale() {
    //x = document.getElementById('box');

    if (b == 0) {
        x.style.transform = 'scaleY(1.5)';
        x.style.transform = 'scaleX(1.5)';
        b = 1;
    } else if (b == 1) {
        x.style.transform = 'scaleY(2.0)';
        x.style.transform = 'scaleX(2.0)';
        b = 2;
    } else if (b == 2) {
        x.style.transform = 'none';
        x.style.transform = 'none';
        b = 0;
    } 
}


function makeTranslate() {
    //x = document.getElementById('box');

    if (b == 0) {
        x.style.transform = 'translate(20px)';
        b = 1;
    } else if (b == 1) {
        x.style.transform = 'translate(-20px)';
        b = 2;
    } else if (b == 2) {
        x.style.transform = 'translate(40px)';
        b = 3;
    } else if (b == 3) {
        x.style.transform = 'translate(-40px)';
        b = 4;
    } else if (b == 4) {
        x.style.transform = 'translate(60px)';
        b = 5;
    } else if (b == 5) {
        x.style.transform = 'translate(-60px)';
        b = 6;
    } else if (b == 6) {
        x.style.transform = 'none';
        b = 0;
    }
}

function reset() {
    x.style.transform = 'none';
}