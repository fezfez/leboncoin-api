import api = require("./leboncoin-api")
import config = require("./config")

console.log("Config: "+JSON.stringify(config))

console.log("What do you want to do?")
var currentApi = new api(config.login, config.password)