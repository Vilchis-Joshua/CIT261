var bookToParse = "";

//function startUp() {
//    loadDocs();
//}

function chooseBook(obj) {
 

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

    if (bookToParse != null) {
        bookToParse = null;
    }
    if (document.getElementById('bom').checked == true) {
        bookToParse += "JSON/book-of-mormon.json";
    } else if (document.getElementById('dac').checked == true) {
        bookToParse += "JSON/doctrine-and-covenants.json";
    } else if (document.getElementById('ot').checked == true) {
        bookToParse += "JSON/old-testament.json";
    } else if (document.getElementById('nt').checked == true) {
        bookToParse += "JSON/new-testament.json";
    } else {
        console.log('There was an error loading the book')
    } 


    console.log('Book to parse: ' + bookToParse);
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(this.responseText);
            chooseBook(obj);

        }
    }
    xhttp.open("GET", bookToParse, true);
    xhttp.send();
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