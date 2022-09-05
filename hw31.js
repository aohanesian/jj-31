`use strict`;

(function () {
    const user1 = {
        firstName: "Artur",
        lastName: "Ohanesian",
        fullName: function () {
            return this.firstName + " " + this.lastName;
        }
    }

    const user2 = {
        firstName: "Kristina",
        lastName: "Tymofiichuk",
    }

    let fullName = user1.fullName.bind(user2);
    console.log(fullName());
    console.log(user1.fullName());
})();