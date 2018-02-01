function localPractice() {
    var y = document.getElementById("exampleInput").value;
    localStorage.setItem("example:", y);
}

function revealInfo() {
    document.getElementById("displayInfo").innerHTML = localStorage.getItem("example:");
    console.log(document.getElementById("displayInfo").value);
} 

function clear() {
    localStorage.clear();
}