//get the files to load onload

var bookToParse = "";
var obj;

function start() {
    document.getElementById('deeper').style.visibility = 'hidden';
}


function chooseBook(b) {
    var temp = 1;
    var sel = document.getElementById('bookSelect');
    if (sel.options.length != 0) {
        sel.options.length = 0;
    }

    // Check it it's d&c or not
    if (b == 0) {
        for (i in obj.books) {
            if (temp == 1) {
                var tempOpt = document.createElement('option');
                tempOpt.setAttribute('id', 'BookPlaceholder');
                tempOpt.innerHTML += "Book";
                document.getElementById('bookSelect').appendChild(tempOpt);
                temp++;
            }
            var opt = document.createElement('option');
            opt.setAttribute('id', obj.books[i].book);
            opt.setAttribute('value', obj.books[i].book);
            opt.innerHTML += obj.books[i].book;
            document.getElementById('bookSelect').appendChild(opt);
        }
    } else {
        for (i in obj.sections) {
            if (temp == 1) {
                var tempOpt = document.createElement('option');
                tempOpt.setAttribute('id', 'sectionPlaceholder');
                tempOpt.innerHTML += "Section";
                document.getElementById('bookSelect').appendChild(tempOpt);
                temp++;
            }
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

// Not great naming. It is really choosing the chapter/section
function chooseVerse() {
    var temp = 1;
    var sel = document.getElementById('verseSelect');
    if (sel.options.length != 0) {
        sel.options.length = 0;
    }

    var other = document.getElementById('deeper');
    if (other.options.length != 0) {
        other.options.length = 0;
    }
    var v = document.getElementById('bookSelect').value;
    if (obj.sections) {
        for (i in obj.sections) {
            if (obj.sections[i].section == v) {
                for (j in obj.sections[i].verses) {
                    var opt = document.createElement('option');
                    opt.setAttribute('id', obj.sections[i].verses[j].verse);
                    if (temp == 1) {
                        var tempOpt = document.createElement('option');
                        tempOpt.setAttribute('id', 'versePlaceholder');
                        tempOpt.innerHTML += "Verse";
                        document.getElementById('verseSelect').appendChild(tempOpt);
                        temp++;
                    }
                    opt.setAttribute('selected', 'selected')
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
                    if (temp == 1) {
                        var tempOpt = document.createElement('option');
                        tempOpt.setAttribute('id', 'chapterNumberPlaceholder');
                        tempOpt.innerHTML += "Chapter";
                        document.getElementById('deeper').appendChild(tempOpt);
                        temp++;
                    }
                    var opt = document.createElement('option');
                    opt.setAttribute('id', obj.books[i].chapters[j].chapter);
                    opt.innerHTML += obj.books[i].chapters[j].chapter;
                    document.getElementById('deeper').appendChild(opt);
                }
                return;
            }
        }
    }
}



// Another bad naming. This is for choosing the verse
function chooseReference() {

    document.getElementById('verseSelect').style.visibility = 'visible';

    var a = document.getElementById('bookSelect').value;
    var v = document.getElementById('verseSelect').value;

    if (obj.sections) {
        for (i in obj.sections) {
            if (obj.sections[i].section == a) {
                for (j in obj.sections[i].verses) {
                    if (obj.sections[i].verses[j].verse == v) {
                        document.getElementById('displayVerse').innerHTML =
                            obj.sections[i].verses[j].text;
                        //document.getElementById('displayBookTitle').innerHTML += obj.books[i].book;
                        return;
                    }
                }
            }
        }
    } else {
        for (i in obj.books) {
            if (obj.books[i].book == a) {
                for (j in obj.books[i].chapters) {
                    for (k in obj.books[i].chapters[j].verses) {
                        if (obj.books[i].chapters[j].verses[k].verse == v) {
                            //var el = document.getElementById('displayVerse');
                            //var newEl = obj.books[i].chapters[j].verses[k].text;
                            //el.parentNode.replaceChild(newEl, el);
                            var parent = document.getElementById('verse-div');
                            var child = document.getElementById('displayVerse');
                            parent.removeChild(child);

                            var par = document.createElement('p');
                            par.className = 'verse-text';
                            par.textContent = obj.books[i].chapters[j].verses[k].text;
                            //par.setAttribute('class', 'textColor');
                            par.setAttribute('id', 'displayVerse');
                            parent.appendChild(par);

                            //========================THis is what I need====================
                            //document.getElementById('displayVerse').innerHTML =
                            //    obj.books[i].chapters[j].verses[k].text;
                            //document.getElementById('displayBookTitle').innerHTML += obj.books[i].book;
                            //===================================================================

                            //var pa = document.createElement('p');
                            //pa.setAttribute('class', 'textColor');
                            //pa.innerHTML += obj.books[i].chapters[j].verses[k].text;
                            return;                            
                        }
                    }
                }
            }
        }
    }
}

// In the case it's not D&C, you need another layer to choose from.
function otherBooks() {
    var temp = 1;
    document.getElementById('deeper').style.visibility = 'visible';
    var sel = document.getElementById('verseSelect');
    if (sel.options.length != 0) {
        sel.options.length = 0;
    }

    var v = document.getElementById('bookSelect').value;
    var a = document.getElementById('deeper').value;

    var di = document.createElement('div');

    for (i in obj.books) {
        if (obj.books[i].book == v) {
            for (j in obj.books[i].chapters) {
                if (obj.books[i].chapters[j].chapter == a) {
                    for (k in obj.books[i].chapters[j].verses) {
                        var opt = document.createElement('option');
                        if (temp == 1) {
                            var tempOpt = document.createElement('option');
                            tempOpt.setAttribute('id', 'versePlaceholder');
                            tempOpt.innerHTML += "Verse";
                            document.getElementById('verseSelect').appendChild(tempOpt);
                            temp++;
                        }
                        var z = obj.books[i].chapters[j].verses[k].verse
                        opt.setAttribute('id', z);
                        opt.innerHTML += z;
                        document.getElementById('verseSelect').appendChild(opt);
                    }
                    return;
                }
            }
        }
    }
}


