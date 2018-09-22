const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/static'));


app.get('/', function(req, res) {
    res.render('pages/index');
});

app.listen(9000);