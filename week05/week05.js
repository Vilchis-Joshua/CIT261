function localPractice() {
    var y = document.getElementById("exampleInput").value;
    localStorage.setItem("example:", y);
}

function revealInfo() {
    document.getElementById("displayInfo").value = localStorage.getItem("example:");
} 

function clear() {
    localStorage.clear();
}