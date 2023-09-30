const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination: '/upload',
    filename: (req, file, callback) => {
       const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
       callback(null, uniqueSuffix + path.extname(file.originalname));
     },    
   })

   module.exports = storage