const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 5000;

// === MIDDLEWARE ===
app.use(express.json(), express.urlencoded({ extended: true }), cors());

// grab the config
require("./config/mongoose.config");

// grab the routes
require("./routes/routes")(app);

app.listen(port, () => {
    console.log("🔊​🔊​🔊​ Listening to port " + port);
});
