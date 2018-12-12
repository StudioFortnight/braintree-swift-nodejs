var express = require('express');
var router = express.Router();
require('dotenv').config()

router.get('/', function (req, res, next) {
    var gateway = require('./gateway');

    gateway.clientToken.generate({}, function (err, response) {
        if (err) res.send(err);
        res.json({ client_token: response.clientToken });
    });
});

module.exports = router;