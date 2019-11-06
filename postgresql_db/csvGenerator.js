const fs = require('fs');
const faker = require('faker');

const writePhotos = fs.createWriteStream('photos.csv');
writePhotos.write('photo_id, listing_id, photo_url, caption\n', 'utf8');

function writeTenMillionPhotos(writer, encoding, callback) {
  let i = 10000000;
  let photo_id = 0;
  let listing_id = 0;
  let randomNum = () => faker.random.number({
    'min': 5,
    'max': 6
  });

  function write() {
    let ok = true;
    do {
      i -= 1;
      listing_id += 1;

      let max = randomNum();

      for (var j = 0; j < max; j++) {
        photo_id += 1;
        console.log(photo_id);
        const caption = faker.lorem.sentence();
        const photo_url = faker.image.city();
        const data = `${photo_id},${listing_id},${photo_url},${caption}\n`;
        if (i === 0) {
          writer.write(data, encoding, callback);
        } else {
  // see if we should continue, or wait
  // don't pass the callback, because we're not done yet.
          ok = writer.write(data, encoding);
        }
      }
    } while (i > 0 && ok);
    if (i > 0) {
// had to stop early!
// write some more once it drains
      writer.once('drain', write);
    }
  }
write()
}

writeTenMillionPhotos(writePhotos, 'utf-8', () => {
  writePhotos.end();
});


const writeListings = fs.createWriteStream('listings.csv');
writeListings.write('listing_id\n', 'utf8');

function writeTenMillionListings(writer, encoding, callback) {
  let i = 10000000;
  let listing_id = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      listing_id += 1;
      const data = `${listing_id}\n`;
      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
// see if we should continue, or wait
// don't pass the callback, because we're not done yet.
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
// had to stop early!
// write some more once it drains
      writer.once('drain', write);
    }
  }
write()
}

writeTenMillionListings(writeListings, 'utf-8', () => {
  writeListings.end();
});