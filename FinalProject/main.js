function startUp() {
    loadDocs();
}

function chooseBook(json) {
    var bom = document.getElementById('bom');  
    var dac = document.getElementById('dac');   
    var ot = document.getElementById('ot');   
    var nt = document.getElementById('nt');   

    if (bom.checked == true) {
        //var json = JSON.stringify('JSON/book-of-mormon.json');
        document.getElementById('display').innerHTML = json;
    } else if (dac.checked == true) {
        console.log('dac working');
    } else if (ot.checked == true) {
        console.log('ot working');
    } else if (nt.checked == true) {
        console.log('nt working');
    } else {
        console.log('error');
    }
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
            chooseBook(this);
            var xjson = JSON.parse(this.responseText);
        }
    }
    xhttp.open("GET", "JSON/book-of-mormon.json", true);
    xhttp.send();
}