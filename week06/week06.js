function createButton() {
    //Create button elements
    var btn = document.createElement("BUTTON");

    //create text
    var t = document.getElementById("name").value;
    var text = document.createTextNode(t);

    btn.appendChild(text);

    document.body.appendChild(btn);
}

function createDiv() {
    //Create div elements
    var btn = document.createElement("DIV");

    //create text
    var t = document.getElementById("name").value;
    var text = document.createTextNode(t);

    btn.appendChild(text);

    document.body.appendChild(btn);
}

function createH2() {
    //Create h2 elements
    var btn = document.createElement("H2");

    //create text
    var t = document.getElementById("name").value;
    var text = document.createTextNode(t);

    btn.appendChild(text);

    document.body.appendChild(btn);
}


function deleteButton() {

}

function deleteDiv() {

}

function deleteH2() {

}