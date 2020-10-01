// Google payment button

//Google API Version
const baseRequest = {
    apiVersion: 2,
    apiVersionMinor: 0
};

//Payment Token
const tokenizationSpecification = {
    type: 'DIRECT',
    parameters: {
        'protocolVersion': "ECv2",
        'publicKey': 'BOdoXP1aiNp.....kh3JUhiSZKHYF2Y='
    }
};

const allowedCardAuthNetwork = ["AMEX", "DISCOVER", "INTERAC", "JCB", "MASTERCARD", "VISA"];

const allowedCardAuthMethods = ["PAN_ONLY", "CRYPTOGRAM_3DS"];

const baseCardPaymentMethod = {
    type: 'CARD',
    parameters: {
        allowedAuthMethods: allowedCardAuthMethods,
        allowedCardNetworks: allowedCardAuthNetwork
    }
};

const cardPaymentMethod = Object.assign(
    {tokenizationSpecification: tokenizationSpecification},
    baseCardPaymentMethod
);

const paymentClient = new google.payment.api.PaymentsClient({environment: 'TEST'});

const isReadyToPayRequest = Object.assign({}, baseRequest);
isReadyToPayRequest.allowedPaymentMethods = [baseCardPaymentMethod];

paymentClients.isReadyToPay(isReadyToPayRequest)
    .then(function(response) {
        if(response.result) {
            // add google payment button
        }
    })
    .catch(function(err) {
        console.log(err);
    });

    const button = PaymentsClient.createButton({onClick: () => console.log('TODO: click handler')});
    document.getElementById('container').appendChild(button);

    const paymentDataRequest = Object.assign({}, baseRequest);

    paymentDataRequest.allowedPaymentMethods = [cardPaymentMethod];

    paymentDataRequest.transactionInfo = {
        totalPriceStatus: 'FINAL',
        totalPrice: '123.45',
        currencyCode: 'USD',
        countryCode: 'US'
    };

    paymentDataRequest.merchantInfo = {
        merchantName: 'Example Merchant',
        merchantId: '12345678901234567890'
    };

    paymentsClient.loadPaymentData(paymentDataRequest)
        .then(function(paymentData) {
            paymentToken = paymentData.paymentMethodData.tokenizationData.token;
        }).catch(function(err) {
            console.log(err);
        });

