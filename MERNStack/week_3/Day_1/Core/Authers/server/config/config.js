const mongoose = require("mongoose");
require('dotenv').config();
const dbName = process.env.db;
// const username = process.env.username;
// const pw = process.env.pw;


//!don't forget to change the string 
const uri = `mongodb+srv://root:root@root.mrndn47.mongodb.net/${dbName}?retryWrites=true&w=majority`
console.log(uri);
mongoose
    .connect(uri)
    .then(()=>
    console.log("Established a connection to the database"+ dbName)
    )
    .catch((err)=>
    console.log("Something went wrong connecting to the database",err)
    )

    module.exports =mongoose;