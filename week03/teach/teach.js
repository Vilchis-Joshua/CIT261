var first_person = {
    firstName: "Joseph",
    lastName: "Smith",
    gender: "male",

    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}

console.log(first_person.fullName());
document.getElementById('firstpart').innerHTML = first_person.fullName();