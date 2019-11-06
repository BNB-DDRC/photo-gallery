const express = require('express');
const path = require('path');
// const Photo = require('../database/model.js');
const dbMethods = require('../database/index.js');

const PORT = 3001;
const app = express();

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

app.listen(PORT, () => { console.log('Express is Listening on :', PORT)});