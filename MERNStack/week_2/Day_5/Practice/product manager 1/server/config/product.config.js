const mongoose = require("mongoose");
require('dotenv').config();

const dbName = process.env.db;
const username = process.env.username;
const pw = process.env.pw;

const uri = `mongodb+srv://${username}:${pw}@root.mrndn47.mongodb.net/${dbName}?retryWrites=true&w=majority`;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Established a connection to the database: " + dbName))
  .catch((err) => console.log("Something went wrong connecting to the database", err));


  module.exports =mongoose;