function generateString() {
    document.getElementsByClassName("json")[0].style.visibility = 'visible';
}


function toParse() {
    var text = '{ "employees" : [' +
        '{ "firstName":"Josh" , "lastName":"Vilchis", "gender":"male", "age":22 },' +
        '{ "firstName":"Anna" , "lastName":"Smith", "gender":"female", "age":66 },' +
        '{ "firstName":"Peter" , "lastName":"Jones", "gender":"male", "age":1 } ]}';

    var obj = JSON.parse(text);
    document.getElementById("displayObject").innerHTML = obj;
}

function generateName() {
    var text = '{ "employees" : [' +
        '{ "firstName":"Josh" , "lastName":"Vilchis", "gender":"male", "age":22 },' +
        '{ "firstName":"Anna" , "lastName":"Smith", "gender":"female", "age":66 },' +
        '{ "firstName":"Peter" , "lastName":"Jones", "gender":"male", "age":1 } ]}';

    var obj = JSON.parse(text);
    document.getElementById("displayObject").innerHTML = obj;
    var num = Math.floor(Math.random() * 3);
    document.getElementById("displayName").innerHTML =  obj.employees[num].firstName + " " + obj.employees[num].lastName + " is a "
        obj.employees[num].gender + " and is " + obj.employees[1].age + " years old." 
}