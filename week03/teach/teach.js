function createFirstObject() {
    if (document.getElementById("firstpart").innerHTML == null) {
        var first_person = {
            firstName: "Joseph",
            lastName: "Smith",
            gender: "male",

            fullName: function () {
                return this.firstName + " " + this.lastName;
            }
        }
        document.getElementById("firstpart").innerHTML += first_person.fullName();
    }
}
