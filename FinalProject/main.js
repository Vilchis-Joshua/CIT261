//function startUp() {
//    loadDocs();
//}

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




function loadDoc() {
    var xhttp = new XMLHttpRequest();

    var bookToParse = "";
    bookToParse = getBookValue();
    console.log('Book to parse: ' + bookToParse);

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(this.responseText);
            chooseBook(obj);

        }
    }
    xhttp.open("GET", bookToParse , true);
    xhttp.send();
}

function getBookValue() {

    if (document.getElementById('bom').attributes.checked == true) {
        var bom = "";
        bom = "JSON/book-of-mormon.json"
        return bom;
    } else if (document.getElementById('dac').attributes.checked == true) {

    } else if (document.getElementById('ot').attributes.checked == true) {

    } else if (document.getElementById('nt').attributes.checked == true) {

    } else {
        console.log('There was an error loading the book')
    } 
}














function loadDac() {
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

function loadNt() {
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

function loadOt() {
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