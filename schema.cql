DROP TABLE photo_gallery.photos;
CREATE KEYSPACE IF NOT EXISTS photo_gallery
  WITH replication = {'class': 'SimpleStrategy', 'replication_factor' : 1};

USE photo_gallery;

CREATE TABLE photos (
  listing_id int,
  photo_id int,
  photo_url text,
  caption text,
  PRIMARY KEY (listing_id)
);