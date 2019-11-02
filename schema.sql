DROP DATABASE IF EXISTS photo_gallery;
CREATE DATABASE photo_gallery;

CREATE TABLE listings (
    listing_id SERIAL PRIMARY KEY
);

CREATE TABLE photos (
    listing_id INTEGER NOT NULL,
    photo_id BIGSERIAL NOT NULL PRIMARY KEY,
    photo_url TEXT NOT NULL,
    caption VARCHAR(250) NOT NULL,
    FOREIGN KEY (listing_id) REFERENCES listings (listing_id) ON DELETE CASCADE
);