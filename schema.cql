CREATE KEYSPACE IF NOT EXISTS 'photo_gallery';
USE photo_gallery;

CREATE TABLE photos (
  listing_id int,
  photo_id UUID,
  photo_url text,
  caption text,
  PRIMARY KEY (listing_id)
);