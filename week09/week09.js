function alertExample() {
    var x = Date();
    alert('Time: ' + x);
}

function firstFunction() {
    alert('This alert happens when the page is first loaded!');
}

function changeFunction() {
    var x = document.getElementById('select').value;

    document.getElementById('answer').innerHTML = 'Answer: ' + x;
}

function mouseOver(x) {
    x.style.height = "250px";
    x.style.width = "200px";
}

function normalImg(x) {
    x.style.height = "150px";
    x.style.width = "100px";
}

function keyDown(value, pNumber) {
    if (value.search(/(^[0-9]{3}\s?[0-9]{3}\s?[0-9]{4})$/) == 0) {
        document.getElementById(pNumber)[0].style.visibility = 'hidden';
    } else {
        document.getElementById(pNumber)[0].style.visibility = 'visibile';
    }
}