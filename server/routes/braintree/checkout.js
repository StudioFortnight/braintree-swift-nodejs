var express = require('express');
var router = express.Router();
var braintree = require('braintree');

router.post('/', function (req, res, next) {
    var gateway = braintree.connect({
        environment: braintree.Environment.Sandbox,
        // Use your own credentials from the sandbox Control Panel here
        merchantId: process.env.MERCHANTID,
        publicKey: process.env.PUBLICKEY,
        privateKey: process.env.PRIVATEKEY
    });

    // Use the payment method nonce here
    var nonceFromTheClient = req.body.paymentMethodNonce;

    // Create a new transaction
    var newTransaction = gateway.transaction.sale({
        amount: '10.00',
        paymentMethodNonce: nonceFromTheClient,
        options: {
            // This option requests the funds from the transaction
            // once it has been authorized successfully
            submitForSettlement: true,
            storeInVaultOnSuccess: true
        },
        customFields: {
            field1: "Custom field",
        },
    }, function (error, result) {
        if (result) {
            res.send(result);
        } else {
            res.status(500).send(error);
        }
    });
});

module.exports = router;