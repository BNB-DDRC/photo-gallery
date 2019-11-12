const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const dbMethods = require('../database/cassandra/dbMethods.js');
// const Photo = require('../database/mongo/Model.js');
// const dbMethods = require('../database/mongo/index.js');

const PORT = 3001;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/', express.static(path.join(__dirname, '../public')));

app.use('/gallery/:listingId', express.static(path.join(__dirname, '../public')));

app.get('/:listingId', (req, res) => {
    dbMethods.getAll(req, res);
});

app.post('/:listingId', (req, res) => {
    dbMethods.insertOne(req, res);
});

app.listen(PORT, () => { console.log('Express is Listening on :', PORT)});