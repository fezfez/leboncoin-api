declare var process: any;

var config = {
    login: process.env.LOGIN || "login",
    password: process.env.PASSWORD || "password"
}

export = config;