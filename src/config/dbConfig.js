const mongoose = require('mongoose')

const dbConnect = mongoose.connect("mongodb://127.0.0.1:27017/vidoe",{useNewUrlParser:true,useUnifiedTopology:true})
    .then( (result)=> {
        console.log("connected to database");
    })
    .catch((err) =>{console.log("error connecting to the database");})

module.exports = dbConnect