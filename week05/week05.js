function localPractice() {
    var text = document.getElementById("exampleInput").value;
    var key = document.getElementById("exampleKey").value;
    localStorage.setItem(key, text);
}

function revealInfo() {
    document.getElementById("displayInfo").value = localStorage.getItem("example:");
} 

function clear() {
    localStorage.clear();
}