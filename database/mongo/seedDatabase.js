const mongoose = require('mongoose');
const faker = require('faker');
const Photo = require('./Model.js')
const photoData = require('./dummyPhoto.js');

mongoose.connect('mongodb://localhost/photos');

const db = mongoose.connection;

db.on('err', console.error.bind('err'));
db.once('open', () => {console.log('DB Connected')});

var data = [];
for (var i = 1; i < 101; i++) {
    let index = Math.floor(Math.random() * 2);
   for( var j = 1; j < 11; j++) {
       var picture = {
           listingId: i,
           photoId: j,
           caption: faker.lorem.words(),
           photoUrl: photoData[index][j-1]
       }
       data.push(picture);
   }
};

Photo.insertMany(data);


