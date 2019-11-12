const mongoose = require('mongoose');
const Photo = require('./Model.js');


mongoose.connect('mongodb://localhost/photos');

const db = mongoose.connection;

db.on('err', console.error.bind('err'));
db.once('open', () => {console.log('DB Connected!!')});



const getAll = (req, res) => {
  Photo.find({listingId: req.params.listingId})
  .then(data => res.send(data));
}


module.exports = {
    getAll: getAll
}