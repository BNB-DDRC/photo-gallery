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
> `http://localhost:3001/rooms/:id/` Dynamically render rooms based on listing id.

### POST
> `/add/:id/` Add a photo in listing.

### GET
> `/:id/:photoId` Retreive a photo in listing.

### PUT
> `/update/:id/:photoId` Update a photo in listing.

### DELETE
> `/delete/:id/:photoId` Delete a photo in listing.

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
npm run seed-db
npm run build
npm run start
```
