var bookToParse = "";
var obj;

function chooseBook(b) {
    var sel = document.getElementById('bookSelect');
    if (sel.options.length != 0) {
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
}

function loadDoc() {
    var b = 0;
    if (bookToParse != null) {
        bookToParse = "";
    }
    if (document.getElementById('bom').checked == true) {
        bookToParse += "JSON/book-of-mormon.json";
        document.getElementById('deeper').style.visibility = 'visible';
        b = 0;
    } else if (document.getElementById('dac').checked == true) {
        bookToParse += "JSON/doctrine-and-covenants.json";
        document.getElementById('deeper').style.visibility = 'hidden';
        b = 1;
    } else if (document.getElementById('ot').checked == true) {
        bookToParse += "JSON/old-testament.json";
        document.getElementById('deeper').style.visibility = 'visible';
        b = 0;
    } else if (document.getElementById('nt').checked == true) {
        bookToParse += "JSON/new-testament.json";
        document.getElementById('deeper').style.visibility = 'visible';
        b = 0;
    } else {
        console.log('There was an error loading the book')
    } 

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            obj = JSON.parse(this.responseText);
            chooseBook(b);
        }
    }
    xhttp.open("GET", bookToParse, true);
    xhttp.send();
}

function chooseVerse() {
    var sel = document.getElementById('verseSelect');
    if (sel.options.length != 0) {
        sel.options.length = 0;
    }

    var v = document.getElementById('bookSelect').value;
    if (obj.sections) {
        for (i in obj.sections) {
            if (obj.sections[i].section == v) {
                for (j in obj.sections[i].verses) {
                    var opt = document.createElement('option');
                    opt.setAttribute('id', obj.sections[i].verses[j].verse);
                    opt.innerHTML += obj.sections[i].verses[j].verse;
                    document.getElementById('verseSelect').appendChild(opt);
                }
                return;
            }
        }
    } else {
        for (i in obj.books) {
            if (obj.books[i].book == v) {
                for (j in obj.books[i].chapters) {
                    for (k in obj.books[i].chapters[j].verses) {
                        var opt = document.createElement('option');
                        opt.setAttribute('id', obj.books[i].chapters[j].verses[k].verse);
                        opt.innerHTML += obj.books[i].chapters[j].verses[k].verse;
                        document.getElementById('deeper').appendChild(opt);
                    }
                    return;
                }
            }
        }
    }
}


function chooseReference() {
    var a = document.getElementById('bookSelect').value;
    var v = document.getElementById('verseSelect').value;

    console.log('v: ' + v);
    if (obj.sections) {
        for (i in obj.sections) {
            if (obj.sections[i].section == a) {
                for (j in obj.sections[i].verses) {
                    if (obj.sections[i].verses[j].verse == v) {
                        document.getElementById('displayVerse').innerHTML =
                            obj.sections[i].verses[j].text;
                        return;
                    }
                }
            }
        }
    } else {
        for (i in obj.books) {
            if (obj.books[i].book == v) {
                for (j in obj.books[i].chapters) {
                    for (k in obj.books[i].chapters[j].verses) {
                        if (obj.books[i].chapters[j].verses[k].verse == v) {
                            document.getElementById('displayVerse').innerHTML =
                                obj.books[i].chapters[j].verses[k].text;
                            return;
                        }
                    }
                }
            }
        }
    }
}

function otherBooks() {
    var sel = document.getElementById('verseSelect');
    if (sel.options.length != 0) {
        sel.options.length = 0;
    }

    var other = document.getElementById('deeper');
    if (other.options.length != 0) {
        other.options.length = 0;
    }

    var v = document.getElementById('bookSelect').value;

    for (i in obj.books) {
        if (obj.books[i].book == v) {
            for (j in obj.books[i].book) {
                for (k in obj.books[i].chapters[j].verses) {
                    var opt = document.createElement('option');
                    opt.setAttribute('id', obj.books[i].chapters[j].verses[k].verse);
                    opt.innerHTML += obj.books[i].chapters[j].verses[k].verse;
                    document.getElementById('verseSelect').appendChild(opt);
                }
                return;
            }
        }
    }
}