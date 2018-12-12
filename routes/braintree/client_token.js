var express = require('express');
var router = express.Router();
var braintree = require('braintree');
require('dotenv').config()

router.get('/', function (req, res, next) {
    var gateway = braintree.connect({
        environment: braintree.Environment.Sandbox,
        // Use your own credentials from the sandbox Control Panel here
        merchantId: process.env.MERCHANTID,
        publicKey: process.env.PUBLICKEY,
        privateKey: process.env.PRIVATEKEY
    });

    gateway.clientToken.generate({}, function (err, response) {
        if (err) res.send(err);
        res.json({ client_token: response.clientToken });
    });
});

module.exports = router;