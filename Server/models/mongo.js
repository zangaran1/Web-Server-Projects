require('dotenv').config();
const { MongoClient, ServerApiVersion, } = require('mongodb');
const uri = process.env.MONGO_URI;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
const isConnected = client.connect();

module.exports = {
  isConnected,
  client
}
