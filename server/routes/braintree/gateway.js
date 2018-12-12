var braintree = require('braintree');

const gateway = braintree.connect({
    environment: braintree.Environment.Sandbox,
    // Use your own credentials from the sandbox Control Panel here
    merchantId: process.env.MERCHANTID,
    publicKey: process.env.PUBLICKEY,
    privateKey: process.env.PRIVATEKEY
});

module.exports = gateway;