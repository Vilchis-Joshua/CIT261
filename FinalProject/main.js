var bookToParse = "";

//function startUp() {
//    loadDocs();
//}

function chooseBook(obj, b) {
    var sel = document.getElementById('bookSelect');
    if (sel.options.length != 0) {
        //for (var i = 0; i < sel.options.length; i++) {
        //    sel.removeChild(sel.options[i]);
        //}
        sel.options.length = 0;
    }

    // Check it it's d&c or not
    if (b == 0) {

        for (i in obj.books) {

            var opt = document.createElement('option');
            opt.setAttribute('id', obj.books[i].book);
            opt.setAttribute('value', obj.books[i].book);
            opt.innerHTML += obj.books[i].book;
            document.getElementById('bookSelect').appendChild(opt);
        }
    } else {

        for (i in obj.sections) {

            var opt = document.createElement('option');
            opt.setAttribute('id', obj.sections[i].section);
            opt.setAttribute('value', obj.sections[i].section);
            opt.innerHTML += obj.sections[i].section;
            document.getElementById('bookSelect').appendChild(opt);
        }
    }


    //if (bom.checked == true) {
    //    for (i in obj.books) {
    //        var opt = document.createElement('option');
    //        opt.setAttribute('id', obj.books[i].book);
    //        opt.setAttribute('value', obj.books[i].book);
    //        opt.innerHTML += obj.books[i].book;
    //        document.getElementById('bookSelect').appendChild(opt);
    //    }
    //} else if (dac.checked == true) {
    //    for (i in obj.sections) {
    //        var opt = document.createElement('option');
    //        opt.setAttribute('id', obj.sections[i].section);
    //        opt.setAttribute('value', obj.sections[i].section);
    //        opt.innerHTML += obj.sections[i].section;
    //        document.getElementById('bookSelect').appendChild(opt);
    //        dac.checked = false;
    //    }
    //} else if (ot.checked == true) {
    //    for (i in obj.books) {
    //        var opt = document.createElement('option');
    //        opt.setAttribute('id', obj.books[i].book);
    //        opt.setAttribute('value', obj.books[i].book);
    //        opt.innerHTML += obj.books[i].book;
    //        document.getElementById('bookSelect').appendChild(opt);
    //        ot.checked = false;
    //    }
    //} else if (nt.checked == true) {
    //    for (i in obj.books) {
    //        var opt = document.createElement('option');
    //        opt.setAttribute('id', obj.books[i].book);
    //        opt.setAttribute('value', obj.books[i].book);
    //        opt.innerHTML += obj.books[i].book;
    //        document.getElementById('bookSelect').appendChild(opt);
    //        nt.checked = false;
    //    }
    //} else {
    //    console.log('Nothing checked');
    //}

}




function loadDoc() {
    var b = 0;
    if (bookToParse != null) {
        bookToParse = "";
    }
    if (document.getElementById('bom').checked == true) {
        bookToParse += "JSON/book-of-mormon.json";
        b = 0;
    } else if (document.getElementById('dac').checked == true) {
        bookToParse += "JSON/doctrine-and-covenants.json";
        b = 1;
    } else if (document.getElementById('ot').checked == true) {
        bookToParse += "JSON/old-testament.json";
        b = 0;
    } else if (document.getElementById('nt').checked == true) {
        bookToParse += "JSON/new-testament.json";
        b = 0;
    } else {
        console.log('There was an error loading the book')
    } 

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(this.responseText);
            chooseBook(obj, b);

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