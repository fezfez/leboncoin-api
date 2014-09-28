api = require "./leboncoin-api.js"
config = require "./config.js"

console.log("Config: "+JSON.stringify(config))

console.log "What do you want to do?"
currentApi = new api(config.login)