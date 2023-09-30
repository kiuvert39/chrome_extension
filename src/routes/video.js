const express = require('express');
const router = express.Router()
const video =  require('../controllers/video');
const storage = require('../helpers/multer')
const multer = require('multer')
const upload = multer({ storage })
 

router.post('/upload',upload.single('file'),video.uploadVideo)
router.get('/videos', video.getAllVideos)
router.get('/videos/:id', video.getVideosById)

module.exports = router