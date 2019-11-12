const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/photos');

const db = mongoose.connection;

db.on('err', console.error.bind('err'));
db.once('open', () => {console.log('DB Connected')});

var Schema = new mongoose.Schema({
    listingId: Number,
    photoId: Number,
    caption: String,
    photoUrl: String
});

var Photo = mongoose.model('Photos', Schema);

module.exports = Photo;