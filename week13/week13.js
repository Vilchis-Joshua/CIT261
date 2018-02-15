function changeDirection() {
    if (document.getElementById("animationFun").style.animationDirection != 'reverse') {
        document.getElementById("animationFun").style.animationDirection = 'reverse';
    } else {
        document.getElementById("animationFun").style.animationDirection = 'normal';
    }
}


function changeState() {
    if (document.getElementById("animationFun2").style.animationPlayState != 'paused') {
        document.getElementById("animationFun2").style.animationPlayState = 'paused';
    } else {
        document.getElementById("animationFun2").style.animationPlayState = 'running';
    }
}