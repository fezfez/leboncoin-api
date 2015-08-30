import Nightmare = require('nightmare');

var nightmareInstance = new Nightmare()
    .useragent("Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:39.0) Gecko/20100101 Firefox/39.0")

export = nightmareInstance;