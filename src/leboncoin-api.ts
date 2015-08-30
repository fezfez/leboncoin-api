import nightmare = require('./nightmare');

class LeBonCoinAPI {
    private _login: string;
    private _password: string;
    private isLogged: boolean = false;
    constructor(login: string, password: string) {
        this._login = login;
        this._password = password;
    }

    login() {
        console.log("Login in");

        nightmare
            .goto('https://compteperso.leboncoin.fr/')
            .title(function(title){
                console.log("title: "+title)
            })//.click('input[title="Accéder à mon compte"]')
            .type('input[name="st_username"]', this._login)
            .type('input[name="st_passwd"]', this._password)
            .click('input[value="valider"]').wait()
            .title(function(title){
                console.log("title: "+title)
            })
            .url(function(url){
                console.log("url: "+url)
            })
            .screenshot("./screenshot.png")
            .run();

        this.isLogged = true;
    }
}

export = LeBonCoinAPI