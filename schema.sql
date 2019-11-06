DROP DATABASE IF EXISTS photo_gallery;
DROP TABLE IF EXISTS listings, photos;
CREATE DATABASE photo_gallery;

CREATE TABLE listings (
    listing_id SERIAL PRIMARY KEY
);

CREATE TABLE photos (
    photo_id SERIAL NOT NULL PRIMARY KEY,
    listing_id INTEGER NOT NULL,
    photo_url TEXT NOT NULL,
    caption VARCHAR(250) NOT NULL
    -- FOREIGN KEY (listing_id) REFERENCES listings (listing_id) ON DELETE CASCADE
);

-- COPY listings FROM './postgresql_db/listings.csv' DELIMITER ',' CSV HEADER; -- about 18.5 secs
-- COPY photos FROM './postgresql_db/photos.csv' DELIMITER ',' CSV HEADER; -- about 6 min, 53 secs

-- ALTER TABLE photos
-- ADD CONSTRAINT constraint_fk
-- FOREIGN KEY (c1)
-- REFERENCES parent_table(p1)
-- ON DELETE CASCADE;