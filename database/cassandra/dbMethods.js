const cassandra = require('cassandra-driver');
const Uuid = require('cassandra-driver').types.Uuid;

const client = new cassandra.Client({ 
  contactPoints: ['127.0.0.1'],
  localDataCenter: 'datacenter1',
  keyspace: 'photo_gallery'
});

client.connect()
  .then(() => console.log('Connected to Cassandra!'));

const getAll = (req, res) => {
  const query = 'SELECT * FROM photo_gallery.photos WHERE listing_id = ?';
  const params = [req.params.listingId];
  client.execute(query, params, { prepare: true })
    .then(result => res.status(200).send(result.rows));
}

const insertOne = (req, res) => {
  const photoId = Uuid.random();
  const query = 'INSERT INTO photo_gallery.photos (listing_id, photo_id, caption, photo_url) VALUES (?, ?, ?, ?) IF NOT EXISTS';
  const params = [req.params.listingId, photoId, req.body.caption, req.body.photo_url];
  client.execute(query, params, { prepare: true })
    .then(result => res.status(200).send(req.body + 'posted!'))
}

module.exports = {
  getAll: getAll,
  insertOne: insertOne
}