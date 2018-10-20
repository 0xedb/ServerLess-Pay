var request = require("request");
const private_key = 'test_4c90504c9700a5adcbe691a58e';

module.exports = function (context, req) {  
    var id = req.body.payload.id;
    var email = req.body.payload.email_address;
    context.log(email);

    //send receipt
    var options = {
        method: 'POST',
        url: 'https://api.paymentspring.com/api/v1/charge/' + id + '/receipt',
        headers: {
            'cache-control': 'no-cache',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + new Buffer(private_key + ':').toString('base64')
        },
        form: {
            receipt_type: "email", 
            email_address: email
        }
    };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);

        context.log(body);
        context.done();
    });

    context.done();

};