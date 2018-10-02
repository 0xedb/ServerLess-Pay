var qs = require("querystring");
var http = require("http");

module.exports = function (context, req) {
    let data = req.body.payload.amount_settled; 
    let dollar = data.slice(0, data.length - 2);
    let cent = data.slice(data.lenght - 2);
    let amount = dollar + "." + cent; 

    let api = "https://serverless-pay.herokuapp.com/api";
    
    context.res = {
        amount: amount 
    }; 

    // make post request to site
    var options = {
        "method": "POST",
        "hostname": [
          api
        ], 
        "headers": {
          "Content-Type": "application/x-www-form-urlencoded",
          "Cache-Control": "no-cache"
        }
      };
      
      var reqq = http.request(options, function (res) {
        var chunks = [];
      
        res.on("data", function (chunk) {
          chunks.push(chunk);
        });
      
        res.on("end", function () {
          var body = Buffer.concat(chunks);
          console.log(body.toString());
        });
      });
      
      reqq.write(qs.stringify({ amount: amount }));
      reqq.end();


    context.done();
};
