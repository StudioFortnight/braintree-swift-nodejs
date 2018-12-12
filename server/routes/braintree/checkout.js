var express = require('express');
var router = express.Router();

router.post('/', function (req, res, next) {
    var gateway = require('./gateway');

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