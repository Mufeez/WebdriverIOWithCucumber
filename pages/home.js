"use strict";

class Home {
    get loginButton() {
        return $('.login');
    }
}

const home = new Home();
module.exports = home;