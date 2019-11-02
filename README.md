# Project Name

> Project description

## Related Projects

  - https://github.com/BNB-DDRC/photo-gallery
  - https://github.com/BNB-DDRC/calendar
  - https://github.com/BNB-DDRC/reviews
  - https://github.com/BNB-DDRC/reservations

## Table of Contents

1. [API](#API)
1. [Requirements](#requirements)
1. [Development](#development)

## API
### URL
> `http://localhost:3001/gallery/:listingId/` Dynamically render gallery based on listing id.
<!-- this is the url for the photo-gallery module -->

### POST
> `/:listingId/upload` Add a photo into a specific listing.

**Example**
req body:
  `{
   photo_url: String
   caption: String
  }`

res: 201

### GET
> `/gallery/:listingId/photos` Retreive all photos in the gallery for a specific listing. (or do I want to get ALL of the photos)
<!--get all method querying the listings table-->

**Example**
`/gallery/1/photos` will return photo gallery for listingId: 1.
`/gallery/8/photos` will return photo gallery for listingId: 8.

### PUT
> `/gallery/:photoId` Update a photo caption or photo URL.

**Example**
req body:
  `{
    caption: String
    photoUrl: String
  }`

res: 200

### DELETE
> `/gallery/:photoId` Delete a photo in listing.

**Example**
res: 200

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

1. Install webpack.
2. Install project dependencies.
3. Seed the database.
4. Bundle webpack.
5. Start the server at localhost:3001.

```sh
npm install
npm run seed-db
npm run build
npm run start
```

start with postgresql
write a script with 10mm+ to generage a csv file
then after
how to put that csv file into postgres

GOALS:
10, 10k, 1 mm, 10 mm