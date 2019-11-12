DROP TABLE photo_gallery.photos;
CREATE KEYSPACE IF NOT EXISTS photo_gallery
  WITH replication = {'class': 'SimpleStrategy', 'replication_factor' : 1};

USE photo_gallery;

CREATE TABLE photos (
  listing_id int,
  photo_id UUID,
  photo_url text,
  caption text,
  PRIMARY KEY ((listing_id), photo_id)
);

COPY photo_gallery.photos (listing_id, photo_id, photo_url, caption) FROM './cassandra_db/photos.csv' WITH DELIMITER = ',' AND HEADER = TRUE;