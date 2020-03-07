"use strict";

class Login {

    get userName() {
        return $('[name="email"]');
    }

    get password() {
        return $('[name="passwd"]');
    }

    get loginButton() {
        return $('#SubmitLogin');
    }
}

const login = new Login();
module.exports = login;