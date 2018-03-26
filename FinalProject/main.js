function startUp() {
    loadDocs();
}

//function loadSearchResults() {
//    var search = document.getElementById('recipeSearchBar');
//    var xhttp = new XMLHttpRequest();

//    xhttp.onreadystatechange = function () {
//        if (this.readyState == 4 && this.status == 200) {
//            prepareSearch(this);
//        }
//    }
//    xhttp.open("GET", "" + , true);
//    xhttp.send();
//}

//xhttp.open("GET", "https://api.edamam.com/search?q=" + search + "&app_id=${e31800e7a9e3b04dd7accb15bee93ee9}&app_key=${52b59a95}" + , true);
//< !--Edamam api key: 52b59a95-- >
//< !--Edamam app id: e31800e7a9e3b04dd7accb15bee93ee9-- >


function loadDocs() {
    var search = document.getElementById('recipeSearchBar');
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById('display').innerHTML = this.responseText;
        }
    }
    xhttp.open("GET", "JSON/book-of-mormon.json", true);
    xhttp.send();
}

function bomSearch() {
    var search = document.getElementById('recipeSearchBar');
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            prepareSearch(this);
        }
    }
    xhttp.open("GET", "JSON/book-of-mormon.json", true);
    xhttp.send();
}


function dacSearch() {
    var search = document.getElementById('recipeSearchBar');
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            prepareSearch(this);
        }
    }
    xhttp.open("GET", "JSON/doctrine-and-covenants.json", true);
    xhttp.send();
}


function oldTestSearch() {
    var search = document.getElementById('recipeSearchBar');
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            prepareSearch(this);
        }
    }
    xhttp.open("GET", "JSON/old-testament.json", true);
    xhttp.send();
}


function newTestSearch() {
    var search = document.getElementById('recipeSearchBar');
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            prepareSearch(this);
        }
    }
    xhttp.open("GET", "JSON/new-testament.json", true);
    xhttp.send();
}

