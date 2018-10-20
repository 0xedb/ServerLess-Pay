var request = require("request");
const private_key = 'test_3333bd972446f2ed51fdf02234';

module.exports = function (context, req) {
    const charge = req.body.charge;
    const id = req.body.id;
    context.log(id);
    context.log(charge);

    //charge token 
    context.log('HHHHHHHHHHHHHHHH');
    var options = {
        method: 'POST',
        url: 'https://api.paymentspring.com/api/v1/charge',
        headers: {
            'Postman-Token': 'cbb40bbe-61b6-4818-b21c-87ea5a9c24b4',
            'cache-control': 'no-cache',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + new Buffer(private_key + ':').toString('base64')
        },
        form: {
            token: id,
            send_receipt: 'false',
            amount: charge
        }
    };

    request(options, function (error, response, body) {
        context.log('HHHHHHHHHHHHHHHH');
        if (error) throw new Error(error);

        context.log(body);
        context.done();
    });
}