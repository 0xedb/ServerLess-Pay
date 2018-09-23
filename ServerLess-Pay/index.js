const request = require('request');
const create_token_url = "https://paymentspring.com/api/v1/tokens";

let param = {
"card_number": "4111111111111111",
"card_exp_month": "1",
"card_exp_year": "2020",
"csc": "1234",
"card_owner_name": "John Doe"
};

module.exports = function (context, req) {
    request({
        url: create_token_url,
        method: 'POST', 
        json: true, 
        body: param
    }, function (error, response, body) {
        console.log(response);
        }).auth(process.env.PUBLIC_KEY, '', true);

   

    context.done();
};

