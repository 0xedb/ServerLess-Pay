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
 























// var qs = require('querystring')
// var http = require('https')



// var options = {
//     "method": "POST",
//     "hostname": [
//         "api",
//         "paymentspring",
//         "com"
//     ],
//     "path": [
//         "api",
//         "v1",
//         "tokens"
//     ],
//     "headers": {
//         "Authorization": "Basic dGVzdF82ZWY1ZTg0ZDFiODM4OTRlNGM4YmM1OGI3YzEwNTQ1OWNlMzBiNmQxNjM5MmQ1ZjAyZGQ5MmI0NDJiOg==",
//         "Content-Type": "application/x-www-form-urlencoded",
//         "Cache-Control": "no-cache",
//         "Postman-Token": "793262d0-9bcd-40b1-aa43-ed7f92143e1d"
//     }
// };

// var req = http.request(options, function(res) {
//     var chunks = [];

//     res.on("data", function(chunk) {
//         chunks.push(chunk);
//     });

//     res.on("end", function() {
//         var body = Buffer.concat(chunks);
//         console.log(body.toString());
//     });
// });

// req.write(qs.stringify({
//     card_number: '4111111111111111',
//     card_exp_month: '12',
//     card_exp_year: '2029',
//     csc: '999',
//     card_owner_name: 'Bee!!!'
// }));
// req.end();