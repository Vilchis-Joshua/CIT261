function startUp() {
    loadDocs();
}

function chooseBook(obj) {
    // I need these so I can get the right information
    var bom = document.getElementById('bom');  
    var dac = document.getElementById('dac');   
    var ot = document.getElementById('ot');   
    var nt = document.getElementById('nt');   

    var sel = document.createElement('select');
    sel.setAttribute('id', 'bookSelect');
    document.getElementById('displayBooks').appendChild(sel);
    var bookName = "";
    if (bom.checked == true) {

        //var json = JSON.stringify('JSON/book-of-mormon.json');
        for (i in obj.books) {
            //dom += '<option>' + obj.books[i].book + '</option>';
            //bookName = obj.books[i].book;
            var opt = document.createElement('option');
            opt.setAttribute('id', obj.books[i].book);
            opt.setAttribute('value', obj.books[i].book);
            opt.innerHTML += obj.books[i].book;
            document.getElementById('bookSelect').appendChild(opt);

            //sel.setAttribute('value', obj.books[i].book);
            //document.getElementById('displayBooks').appendChild(sel);
        }
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
            var obj = JSON.parse(this.responseText);
            chooseBook(obj);

        }
    }
    xhttp.open("GET", "JSON/book-of-mormon.json", true);
    xhttp.send();
}