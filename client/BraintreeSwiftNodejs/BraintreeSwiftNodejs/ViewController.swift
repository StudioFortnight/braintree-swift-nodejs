//
//  ViewController.swift
//  BraintreeSwiftNodejs
//
//  Created by Andrea Toso on 12/12/2018.
//  Copyright © 2018 Andrea Toso. All rights reserved.
//

import UIKit
import BraintreeDropIn
import Braintree
import Alamofire
import SwiftyJSON

class ViewController: UIViewController {
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
    }
    
    func showDropIn(clientTokenOrTokenizationKey: String) {
        let request =  BTDropInRequest()
        let dropIn = BTDropInController(authorization: clientTokenOrTokenizationKey, request: request)
        { (controller, result, error) in
            if (error != nil) {
                print(error!)
            } else if (result?.isCancelled == true) {
                print("CANCELLED")
            } else if let result = result {
                let selectedPaymentMethod = result.paymentMethod!
                self.postNonceToServer(paymentMethodNonce: selectedPaymentMethod.nonce)
                // Use the BTDropInResult properties to update your UI
                // result.paymentOptionType
                // result.paymentMethod
                // result.paymentIcon
                // result.paymentDescription
            }
            controller.dismiss(animated: true, completion: nil)
        }
        self.present(dropIn!, animated: true, completion: nil)
    }
    
    func postNonceToServer(paymentMethodNonce: String) {
        let parameters: Parameters = [
            "paymentMethodNonce": paymentMethodNonce,
        ]
        
        Alamofire.request("http://localhost:3000/braintree/checkout", method: .post, parameters: parameters).responseJSON { response in
            if let jsonRes = response.result.value {
                let json = JSON(jsonRes)
                print(json)
            } else {
                print("error", response)
            }
        }
    }
    
    override func viewDidAppear(_ animated: Bool) {
        super.viewDidAppear(animated)
        
        Alamofire.request("http://localhost:3000/braintree/client_token").responseJSON { response in
            if let json = response.result.value {
                let jsonResult = JSON(json)
                let token = jsonResult["client_token"].stringValue
                self.showDropIn(clientTokenOrTokenizationKey: token)
            }
        }
        
    }
    
}

