function localPractice() {
    var x = document.getElementsByName("exampleInput").value;
    var y = document.getElementById("exampleInput").value;
    console.log(x);
    console.log(y);
    localStorage.setItem("example:", x);
}