function localPractice() {
    var text = document.getElementById("exampleInput").value;
    var key = document.getElementById("exampleKey").value;
    localStorage.setItem(key, text);
}

function revealInfo() {
    var items = new Array();
    for (var i = 0; i < localStorage.length; i++) {
        console.log(localStorage.key(i));
        items.push(localStorage.key(i));
    }

    for (var i = 0; i < localStorage.length; i++) {
        document.getElementById("displayInfo").value += localStorage.getItem(items[i]) + "<br />";
    }
} 

function clear() {
    localStorage.clear();
}