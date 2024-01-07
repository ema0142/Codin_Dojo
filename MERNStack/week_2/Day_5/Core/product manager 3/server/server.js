const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 8000; // Choose your desired port number

// === MIDDLEWARE ===
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Grab the config
require("./config/mongoose.config");

// Grab the routes
require("./routes/routes")(app);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
