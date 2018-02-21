function changeDirection() {
    if (document.getElementById("box2").style.animationDirection != 'reverse') {
        document.getElementById("box2").style.animationDirection = 'reverse';
    } else {
        document.getElementById("box2").style.animationDirection = 'normal';
    }
}


function changeState() {
    if (document.getElementById("box2").style.animationPlayState != 'paused') {
        document.getElementById("box2").style.animationPlayState = 'paused';
    } else {
        document.getElementById("box2").style.animationPlayState = 'running';
    }
}

function changeTimingFunction() {
    var x = Math.floor(Math.random() * 5 + 1);
    console.log(x);
    if (x == 1) {
        document.getElementById('box2').style.animationTimingFunction = 'ease';
    } else if (x == 2) {
        document.getElementById('box2').style.animationTimingFunction = 'ease-out';
    } else if (x == 3) {
        document.getElementById('box2').style.animationTimingFunction = 'ease-in';
    } else if (x == 4) {
        document.getElementById('box2').style.animationTimingFunction = 'linear';
    } else {
        document.getElementById('box2').style.animationTimingFunction = 'ease-in-out';
    }
}

function delay() {
    if (document.getElementById('box2').style.transitionDelay != '1s') {
        document.getElementById('box2').style.transitionDelay = '1s';
    } else {
        document.getElementById('box2').style.transitionDelay = '0s';
    }
}