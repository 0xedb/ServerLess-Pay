const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/static'));


app.get('/', function (req, res) {
    res.render('pages/index');
});

app.get('*', function (req, res) {
    res.render('pages/index');
});

app.listen(process.env.PORT || 9090);