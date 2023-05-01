
const { MongoClient, ObjectId } = require('mongodb');
const uri = process.env.MONGO_URI;
const db_name = process.env.MONGO_DB_NAME ?? 'codefitness';
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient( uri );

async function connect(){
  const db = await client.connect();
  return db.db(db_name);
}
module.exports = {
  ObjectId, db_name,
  connect
}
