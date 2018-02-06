var obj;

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

function turnIntoString() {
    obj = JSON.stringify(snake);
    localStorage.setItem("Snake", obj);
}


function displayStats() {
    var snakeObject = JSON.parse(obj);
    console.log("length: " + snakeObject.total);
}