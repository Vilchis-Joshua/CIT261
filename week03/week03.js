function generateString() {
    document.getElementsByClassName("json")[0].style.visibility = 'visible';
}


function toParse() {
    //var text = '{ "employees" : [' +
    //    '{ "firstName":"Josh" , "lastName":"Vilchis", "gender":"male", "age":22 }' +
    //    '{ "firstName":"Anna" , "lastName":"Smith", "gender":"female", "age":22 }' +
    //    '{ "firstName":"Peter" , "lastName":"Jones", "gender":"male", "age":1 } ]}';
    var text = '{ "employees" : [' +
        '{ "firstName":"John" , "lastName":"Doe" },' +
        '{ "firstName":"Anna" , "lastName":"Smith" },' +
        '{ "firstName":"Peter" , "lastName":"Jones" } ]}';

    var obj = JSON.parse(text);
    document.getElementById("displayObject").innerHTML = obj;
}