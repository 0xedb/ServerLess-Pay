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

let amount = 10; 


app.get('/', function (req, res) {
    res.render('pages/index');
});

// handle post request
app.post('/api', function (req, res) { 
    // perform security checks

    amount = req.body.amount; 
});

app.get('/api', function(req, res) {
    //perform security checks

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ 'amount': amount}));
});


app.get('*', function (req, res) {
    res.render('pages/index');
});


app.listen(process.env.PORT || 9090);


module.exports = app; 
 