

module.exports = function (context, req) { 
    let data = req.body.payload.amount_settled;
    let dollar = data.slice(0, data.length - 2);
    let cent = data.slice(data.lenght - 2);
    let amount = dollar + "." + cent;
    context.log(amount);   
    context.done();
};
