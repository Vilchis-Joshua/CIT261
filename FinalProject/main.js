//get the files to load onload

var bookToParse = "";
var obj;
var dandc = "";
var bookofmorm = "";
var oldT = "";
var newT = "";
var chap = "";
var sec = "";

var source = "";

function start() {
    document.getElementById('displayBookImage').style.visibility = 'hidden';
    document.getElementById('deeper').style.visibility = 'hidden';
    //getBom();
    //getDac();
    //getOt();
    //getNt();
}

//function getBom() {
//    var xhttp = new XMLHttpRequest();
//    xhttp.onreadystatechange = function () {
//        if (this.readyState == 4 && this.status == 200) {
//            bookofmorm = JSON.parse(this.responseText);
//        }
//    }
//    xhttp.open("GET", "JSON/book-of-mormon.json", true);
//    xhttp.send();
//}

//function getDac() {
//    var xhttp = new XMLHttpRequest();
//    xhttp.onreadystatechange = function () {
//        if (this.readyState == 4 && this.status == 200) {
//            dandc = JSON.parse(this.responseText);
//        }
//    }
//    xhttp.open("GET", "JSON/doctrine-and-covenants.json", true);
//    xhttp.send();
//}

//function getOt() {
//    var xhttp = new XMLHttpRequest();
//    xhttp.onreadystatechange = function () {
//        if (this.readyState == 4 && this.status == 200) {
//            oldT = JSON.parse(this.responseText);
//        }
//    }
//    xhttp.open("GET", "JSON/old-testament.json", true);
//    xhttp.send();
//}

//function getNt() {
//    var xhttp = new XMLHttpRequest();
//    xhttp.onreadystatechange = function () {
//        if (this.readyState == 4 && this.status == 200) {
//            newT = JSON.parse(this.responseText);
//        }
//    }
//    xhttp.open("GET", "JSON/new-testament.json", true);
//    xhttp.send();
//}


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
        source = 'Pictures/book_of_mormon.jpg';
        document.getElementById('deeper').style.visibility = 'visible';
        b = 0;
    } else if (document.getElementById('dac').checked == true) {
        bookToParse += "JSON/doctrine-and-covenants.json";
        source = 'Pictures/doctrine_and_covenants.jpg';
        document.getElementById('deeper').style.visibility = 'hidden';
        //document.getElementById('displayBookImage').style.visibility = 'visible';
        b = 1;
    } else if (document.getElementById('ot').checked == true) {
        bookToParse += "JSON/old-testament.json";
        source = 'Pictures/old_testament.jpg';
        document.getElementById('deeper').style.visibility = 'visible';
        //document.getElementById('displayBookImage').style.visibility = 'visible';
        b = 0;
    } else if (document.getElementById('nt').checked == true) {
        bookToParse += "JSON/new-testament.json";
        source = 'Pictures/new_testament.jpg';
        document.getElementById('deeper').style.visibility = 'visible';
        //document.getElementById('displayBookImage').style.visibility = 'visible';
        b = 0;
    } else {
        console.log('There was an error loading the book')
    }

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            obj = JSON.parse(this.responseText);
            chooseBook(b);
            displayImage();
        }
    }
    xhttp.open("GET", bookToParse, true);
    xhttp.send();
}


function displayImage() {
    if (document.getElementById('bom').checked == true) {
        var x = document.getElementById('selectScripture');
    }
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
                sec = v;
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
                        //document.getElementById('displayVerse').innerHTML =
                        //    obj.sections[i].verses[j].text;

                        //========= This is to make the img
                        var imgParent = document.getElementById('verse-div');
                        var imgChild = document.getElementById('displayBookImage');
                        imgParent.removeChild(imgChild);
                        var imgInsert = document.createElement('img');
                        imgInsert.setAttribute('id', 'displayBookImage');
                        imgInsert.setAttribute('height', '200');
                        imgInsert.setAttribute('width', '200');
                        imgInsert.setAttribute('src', source);

                        //========= This is to make the book information 
                        var infoParent = document.getElementById('infoDisplays');
                        var infoChild = document.getElementById('displayInformation');
                        infoParent.removeChild(infoChild);
                        var infoPar = document.createElement('p');
                        infoPar.setAttribute('id', 'displayInformation');
                        infoPar.setAttribute('class', 'textColor');
                        infoPar.innerHTML += (
                            'D&C ' +
                            obj.sections[i].section +
                            ' ' +
                            ':' +
                            obj.sections[i].verses[j].verse);
                        var otherDiv = document.createElement('div');


                        //==============================================

                        //var parent = document.getElementById('verse-div');
                        //var child = document.getElementById('displayVerse');
                        //parent.removeChild(child);

                        //var parentDiv = document.getElementById('versesStuff');
                        //parentDiv.removeChild(parent);

                        //var par = document.createElement('p');
                        //par.textContent = (/*obj.sections[i].verses[j].verse + ' ' + */obj.sections[i].verses[j].text);
                        ////par.setAttribute('class', 'textColor');
                        //par.setAttribute('id', 'displayVerse');

                        //var divToAdd = document.createElement('div');
                        //divToAdd.setAttribute('id', 'verse-div');
                        //divToAdd.setAttribute('class', 'verse-text');

                        var verseChild = document.getElementById('displayVerse');

                        var parent = document.getElementById('verse-div');
                        var child = document.getElementById('vc');
                        child.removeChild(verseChild);
                        parent.removeChild(child);

                        var newDiv = document.createElement('div');
                        newDiv.setAttribute('id', 'vc');
                        newDiv.setAttribute('class', 'verseContainer');

                        var par = document.createElement('p');
                        par.textContent = (/*obj.sections[i].verses[j].verse + ' ' + */obj.sections[i].verses[j].text);
                        //par.setAttribute('class', 'textColor');
                        par.setAttribute('id', 'displayVerse');
                        par.setAttribute('class', 'textColor');

                        var divToAdd = document.createElement('div');
                        divToAdd.setAttribute('id', 'verse-div');
                        divToAdd.setAttribute('class', 'verse-text');

                        parent.appendChild(imgInsert);
                        newDiv.appendChild(par);
                        infoParent.appendChild(infoPar);
                        parent.appendChild(newDiv);
                        
                        document.getElementById('displayBookImage').style.visibility = 'visible';
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
                            ////var el = document.getElementById('displayVerse');
                            ////var newEl = obj.books[i].chapters[j].verses[k].text;
                            ////el.parentNode.replaceChild(newEl, el);

                            ////========= This is to make the book information 
                            //var infoParent = document.getElementById('infoDisplays');
                            //var infoChild = document.getElementById('displayInformation');
                            //infoParent.removeChild(infoChild);
                            //var infoPar = document.createElement('p');
                            //infoPar.setAttribute('id', 'displayInformation');
                            //infoPar.setAttribute('class', 'textColor');
                            //infoPar.innerHTML += (
                            //    obj.books[i].book +
                            //    ' ' +
                            //    chap +
                            //    ':' +
                            //    obj.books[i].chapters[j].verses[k].verse)
                            //document.getElementById('infoDisplays').appendChild(infoPar);

                            ////==============================================
                            //var parent = document.getElementById('verse-div');
                            //var child = document.getElementById('displayVerse');
                            //parent.removeChild(child);

                            //var parentDiv = document.getElementById('versesStuff');
                            //parentDiv.removeChild(parent);

                            //var par = document.createElement('p');
                            //par.textContent = obj.books[i].chapters[j].verses[k].text;
                            ////par.setAttribute('class', 'textColor');
                            //par.setAttribute('id', 'displayVerse');

                            //var divToAdd = document.createElement('div');
                            //divToAdd.setAttribute('id', 'verse-div');
                            //divToAdd.setAttribute('class', 'verse-text');
                            ////divToAdd.className = 'verse-text';

                            //divToAdd.appendChild(par);
                            //parentDiv.appendChild(divToAdd);
                            //return;                            
                            //========= This is to make the img
                            var imgParent = document.getElementById('verse-div');
                            var imgChild = document.getElementById('displayBookImage');
                            imgParent.removeChild(imgChild);
                            var imgInsert = document.createElement('img');
                            imgInsert.setAttribute('id', 'displayBookImage');
                            imgInsert.setAttribute('height', '200');
                            imgInsert.setAttribute('width', '200');
                            imgInsert.setAttribute('src', source);

                            //========= This is to make the book information 
                            var infoParent = document.getElementById('infoDisplays');
                            var infoChild = document.getElementById('displayInformation');
                            infoParent.removeChild(infoChild);
                            var infoPar = document.createElement('p');
                            infoPar.setAttribute('id', 'displayInformation');
                            infoPar.setAttribute('class', 'textColor');
                            infoPar.innerHTML += (
                                obj.books[i].book +
                                ' ' +
                                obj.books[i].chapters[j].chapter +
                                ':' +    
                                obj.books[i].chapters[j].verses[k].verse);
                            var otherDiv = document.createElement('div');



                            //
                            var verseChild = document.getElementById('displayVerse');

                            var parent = document.getElementById('verse-div');
                            var child = document.getElementById('vc');
                            child.removeChild(verseChild);
                            parent.removeChild(child);

                            var newDiv = document.createElement('div');
                            newDiv.setAttribute('id', 'vc');
                            newDiv.setAttribute('class', 'verseContainer');

                            var par = document.createElement('p');
                            par.textContent = (/*obj.sections[i].verses[j].verse + ' ' + */obj.books[i].chapters[j].verses[k].text);
                            //par.setAttribute('class', 'textColor');
                            par.setAttribute('id', 'displayVerse');
                            par.setAttribute('class', 'textColor');

                            var divToAdd = document.createElement('div');
                            divToAdd.setAttribute('id', 'verse-div');
                            divToAdd.setAttribute('class', 'verse-text');

                            parent.appendChild(imgInsert);
                            newDiv.appendChild(par);
                            infoParent.appendChild(infoPar);
                            parent.appendChild(newDiv);

                            document.getElementById('displayBookImage').style.visibility = 'visible';
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
                    chap = a;
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


