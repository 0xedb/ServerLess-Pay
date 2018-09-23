var unirest = require('unirest');



module.exports = function (context, reqs) {
    

    var req = unirest("POST", "https://api.paymentspring.com/api/v1/tokens");

    req.headers({
        "Postman-Token": "0cb7578e-c869-447c-b3ed-11bdeb4e48cf",
        "Cache-Control": "no-cache",
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": "Basic dGVzdF82ZWY1ZTg0ZDFiODM4OTRlNGM4YmM1OGI3YzEwNTQ1OWNlMzBiNmQxNjM5MmQ1ZjAyZGQ5MmI0NDJiOg=="
    });

    req.form({
        "card_number": "4111111111111111",
        "card_exp_month": "12",
        "card_exp_year": "2029",
        "csc": "999",
        "card_owner_name": "Beeee"
    });

    req.end(function(res) {
        if (res.error) throw new Error(res.error);

        console.log(res.body);
    });

    context.done();
};