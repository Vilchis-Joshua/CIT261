function localPractice() {
    var text = document.getElementById("exampleInput").value;
    var key = document.getElementById("exampleKey").value;
    localStorage.setItem(key, text);
}

function revealInfo() {
    var items = new Array();
    for (var i = 0; i < localStorage.length; i++) {
        items.push(localStorage.key(i));
    }

    if (localStorage.length != 0) {
        for (var i = 0; i < localStorage.length; i++) {
            document.getElementById("displayInfo").innerHTML += (i + 1) + ") " + localStorage.getItem(items[i]) + "<br />";
        }
    }
    else {
        document.getElementById("displayInfo").innerHTML = "You have nothing in local storage";
    }
} 

function clearLStorage() {
    localStorage.clear();
}