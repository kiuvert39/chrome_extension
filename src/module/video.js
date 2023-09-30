const mongoose = require('mongoose')
const { Schema } = mongoose


const videoSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    cloudinaryUrl:{
        type: String,
        required: true
    }

})

const videoModle = mongoose.model('video', videoSchema)

module.exports = videoModle