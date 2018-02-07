function localPractice() {
    var text = document.getElementById("exampleInput").value;
    var key = document.getElementById("exampleKey").value;
    localStorage.setItem(key, text);
    console.log("key: " + key + " " + "text: " + text);
    for (var i = 0; i < localStorage.length; i++) {
        console.log(localStorage.key(i));
    }
}

function revealInfo() {
    document.getElementById("displayInfo").value = localStorage.getItem("example:");
} 

function clear() {
    localStorage.clear();
}