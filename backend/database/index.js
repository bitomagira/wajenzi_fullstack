const { Pool, Client } = require("pg");
const connectionString = "postgressql://postgres:postgres@0.0.0.0:5432/wajenzi";

const client = new Client({
  connectionString: connectionString
});
client.connect();

module.exports = client;
