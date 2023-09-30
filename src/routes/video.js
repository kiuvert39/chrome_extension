const express = require('express');
const router = express.Router()
const video =  require('../controllers/video');
const storage = require('../helpers/multer')
const multer = require('multer')
const upload = multer({ storage })
 

router.post('/',upload.single('file'),video.uploadVideo)
      //  .get('/', getAllVideos)
      //  .get('/:id', getVideosById)

module.exports = router