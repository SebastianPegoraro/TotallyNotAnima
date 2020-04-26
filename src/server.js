require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.use(express.static(__dirname + "/../public"));

app.get('/', function (req, res) {
    res.redirect('index.html');
});

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('connected to database'));

app.use(express.json());

const personajesRouter = require('../routes/personajes');
app.use('/personajes', personajesRouter);

var server = app.listen(3000, function () {
    console.log('Server running in port 3000');
});