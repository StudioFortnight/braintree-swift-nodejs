# Braintree drop-in UI in Swift (Client) and NodeJS (Server)

This is a sample project that shows how to implement Braintree drop-in UI in a Swift iOS app (Client) using NodeJS (Server).

<img src='https://developers.braintreepayments.com/img/developers/client-sdk-ios-series-light.png' width='100%' alt='Braintree drop-in UI in Swift (Client) and NodeJS (Server)'>

## Prerequisites

* NodeJS
* Cocoapods

## Project setup (Server)

### Install dependecies

Navigate inside your server folder and run:
```shell
$ npm install
```

### Start your project

```shell
$ npm start
```

### Create .env variables

* Navigate to <a href="https://articles.braintreepayments.com/control-panel/important-gateway-credentials#api-credentials" target="_blank">**BrainTree**</a> to fetch your API credentials
* Navigate to your server folder
* Create a .env file in the root of your server directory and add your credentials
```dosini
MERCHANTID = #MERCHANTID key#
PUBLICKEY = #PUBLICKEY key#
PRIVATEKEY = #PRIVATEKEY key#
```

## Project setup (Client)

### Install dependecies

Navigate to client -> BraintreeSwiftNodejs and run:
```shell
$ pod install
```
Open BraintreeSwiftNodejs.xcworkspace

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details