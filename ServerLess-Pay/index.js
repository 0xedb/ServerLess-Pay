const $ = require('jquery');
const create_token_url = "https://paymentspring.com/api/v1/tokens";

let param = {
"card_number": "4111111111111111",
"card_exp_month": "1",
"card_exp_year": "2020",
"csc": "1234",
"card_owner_name": "John Doe"
};

module.exports = function (context, req) {
    $.ajax({
        url: create_token_url,
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa(process.env.PUBLIC_KEY + ":"));
        },
        type: 'POST',
        data: param,
        success: function (data) {
            context.log('Success!');
        },
        error: function () {
            context.log("Error occurred");
        }
    });


    // context.log('Serverless Code Triggered');
    // if (req.body && req.body.name) {
    //     context.res = {
    //         status: 200,
    //         body: ""
    //     };
    // }

    // const token = function () {

    // };

    context.done();
};

