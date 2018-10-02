const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/static'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

var amount = Number(0); 


app.get('/', function (req, res) {
    res.render('pages/index');
});


app.get('/api', function(req, res) {
    //perform security checks

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ 'amount': amount}));
    console.log(amount, 'get');
});

// handle post request
app.post('/api', function (req, res) { 
    // perform security checks
    var val = Number(req.body.amount);
    if(typeof val === 'number')
        amount = amount + val; 
    console.log(amount, 'post'); 
});


app.get('*', function (req, res) {
    res.render('pages/index');
});


app.listen(process.env.PORT || 9090);


    
 



