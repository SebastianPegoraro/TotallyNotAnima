var express = require('express');
var app = express();

app.use(express.static(__dirname + "/../public"));

app.get('/', function (req, res) {
    res.redirect('index.html');
})

var server = app.listen(5000, function () {
    console.log('Server running in port 5000');
})