const btoa = require('btoa');
const https = require('https');
const create_token_url = "https://paymentspring.com/api/v1/tokens";

let param = {
"card_number": "4111111111111111",
"card_exp_month": "1",
"card_exp_year": "2020",
"csc": "1234",
"card_owner_name": "John Doe"
};

let options = {
    method: 'POST',
    headers: {
        'Authorization': 'Basic ' + btoa(process.env.PUBLIC_KEY)
    }, 
    //auth: process.env.PUBLIC_KEY + ":"
};

module.exports = function (context, req) {
    https.write(param);
    let res = https.request(create_token_url, options);
    https.on('end', () => context.log('Done'));
    https.on('error', (e) => context.log(e));


    context.done();
};





let param = {
    "card_number": "4111111111111111",
    "card_exp_month": "1",
    "card_exp_year": "2020",
    "csc": "1234",
    "card_owner_name": "John Doe"
};

