const express = require('express');
const app = express();
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const video = require('./src/routes/video')
const connectDb = require('./src/config/dbConfig')
const cors = require('cors')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3000
dotenv.config();
connectDb;


app.use(bodyParser.urlencoded({ extended:true }))
app.use(cors())
app.use('/', video)





mongoose.connection.once( 'open', () =>{
    app.listen(PORT, ()=>{
        console.log(`listening at ${PORT}`);
    });
})
