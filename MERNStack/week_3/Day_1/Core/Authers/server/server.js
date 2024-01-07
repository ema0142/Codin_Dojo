const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT; 

// === MIDDLEWARE ===
app.use(express.json(), express.urlencoded({ extended: true }), cors());

// grab the config
require("./config/mongoose.config");

// grab the routes
require("./routes/routes")(app);

// Error handling for MongoDB connection
const db = require("./config/mongoose.config");
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Error handling for server start
app.listen(port, (err) => {
  if (err) {
    console.error("Server error:", err);
    return;
  }
  console.log("🔊​🔊​🔊​ Listening to port " + port);
});
