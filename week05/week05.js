function localPractice() {
    var y = document.getElementById("exampleInput").value;
    localStorage.setItem("example:", y);
}

function revealInfo() {
    var y = localStorage.getItem("example:");
}