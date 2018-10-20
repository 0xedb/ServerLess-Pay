const http = require("https");


module.exports = async function (context, req) { 
    const charge = req.body.charge;
    const id = req.body.id;
    context.log(id);
    context.log(charge);

    //charge token 
    var options = {
        "method": "POST",
        "hostname": 
            "api.paymentspring.com",
        "path": [
            "api",
            "v1",
            "charge"
        ],
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + new Buffer("test_0c8a8408be2166a393a393baeb" + ':').toString('base64')
        }
    };

    var req = http.request(options, function (res) {
        var chunks = [];

        res.on("data", function (chunk) {
            chunks.push(chunk);
            context.log(chunk);
        });

        res.on("end", function () {
            var body = Buffer.concat(chunks);
            context.log(body.toString());
        });
    });

    req.write(JSON.stringify({ token: id, amount: charge, send_receipt: false }));
    req.end();
}