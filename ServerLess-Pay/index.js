const curl = new (require("curl-request"))();
const create_token_url = "https://paymentspring.com/api/v1/tokens";

let param = {
"card_number": "4111111111111111",
"card_exp_month": "1",
"card_exp_year": "2020",
"csc": "1234",
"card_owner_name": "John Doe"
};

module.exports = function (context, req) {
    
    curl.setHeaders(["Authorization: " + "Basic " + btoa(process.env.PUBLIC_KEY + ":")]).setBody(param).post(create_token_url).then(({statusCode, body, headers}) => {
        context.log(body);
    }).catch((e) => {
        context.log(e);
    });


    context.done();
};

