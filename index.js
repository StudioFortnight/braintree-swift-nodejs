var express = require('express');
var app = express();

var checkoutRouter = require('./routes/braintree/checkout');
var clientTokenRouter = require('./routes/braintree/client_token');

app.use(express.urlencoded({
    extended: false
}));

app.use('/braintree/checkout', checkoutRouter);
app.use('/braintree/client_token', clientTokenRouter);

const port = process.env.PORT || 3000;
app.listen(process.env.PORT || 3000, function () {
    console.log('App listening on port ' + port + '!');
});