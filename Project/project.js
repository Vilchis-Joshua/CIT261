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
}

function draw() {
    background(51);
}

function Snake() {
    this.x = 0;
    this.y = 0;
    this.xspeed = 1;
    this.yspeed = 0;

    this.update = function () {
        this.x = this.x + this.xspeed;
        this.y = this.y + this.yspeed;
    }

    this.show = function () {
        fill(255);
        rect(this.x, this.y, 10, 10);
    }
}