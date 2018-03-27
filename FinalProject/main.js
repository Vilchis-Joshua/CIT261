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
        for (i in obj.books) {
            var opt = document.createElement('option');
            opt.setAttribute('id', obj.books[i].book);
            opt.setAttribute('value', obj.books[i].book);
            opt.innerHTML += obj.books[i].book;
            document.getElementById('bookSelect').appendChild(opt);
            bom.checked = false;
        }
    } else if (dac.checked == true) {
        for (i in obj.sections) {
            var opt = document.createElement('option');
            opt.setAttribute('id', obj.sections[i].section);
            opt.setAttribute('value', obj.sections[i].section);
            opt.innerHTML += obj.sections[i].section;
            document.getElementById('bookSelect').appendChild(opt);
            dac.checked = false;
        }
    } else if (ot.checked == true) {
        for (i in obj.books) {
            var opt = document.createElement('option');
            opt.setAttribute('id', obj.books[i].book);
            opt.setAttribute('value', obj.books[i].book);
            opt.innerHTML += obj.books[i].book;
            document.getElementById('bookSelect').appendChild(opt);
            ot.checked = false;
        }
    } else if (nt.checked == true) {
        for (i in obj.books) {
            var opt = document.createElement('option');
            opt.setAttribute('id', obj.books[i].book);
            opt.setAttribute('value', obj.books[i].book);
            opt.innerHTML += obj.books[i].book;
            document.getElementById('bookSelect').appendChild(opt);
            nt.checked = false;
        }
    } else {
        console.log('Nothing checked');
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