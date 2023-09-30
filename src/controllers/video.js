const video = require("../module/video");
const cloudinary = require("../config/config.cloudinary");

const uploadVideo = async (req, res) => {
  try {
    const { title, description } = req.body;
    if (!req.file) {
      return res.status(404).json({ error: "No file uploaded" });
    }
    if (!title || !description) {
      return res
        .status(404)
        .json({ error: "No file uploaded title and description are required" });
    }
    const { path: filePath } = req.file;
    await cloudinary.uploader.upload(
      filePath,
      {
        resource_type: "video",
        floder: "video",
      },
      (error, result) => {
        if (result) {
          const newVideo = video({
            title: title,
            description: description,
            cloudinaryUrl: result.secure_url,
          });

          const saveVideo = newVideo.save();

          if (!saveVideo) {
            console.error("Error saving video metadata:", err);
            res.status(500).json({ error: "Internal Server Error" });
          } else {
            res
              .status(200)
              .json({ msg: "Video uploaded and metadata saved successfully!" });
          }
        } else {
          console.error("Error uploading video to Cloudinary:", error);
          res.status(500).send("Error uploading video to Cloudinary");
        }
      }
    );
  } catch (error) {
    if (error) {
      return res.status(404).json({ error: "all fields are rquired" });
    }
    res.status(500).json({ error: "internal eror occured" });
  }
};
const getAllVideos = async (req, res) => {
    try{
        const allVideos = await video.find({}, '-__v');
        res.status(200).json(allVideos)
    }
    catch(error){
        if(error){
            return res.status(400).json({error:"an error occured while getting all video"})    
        }
        res.status(500).json({error :'internal error occured'})
    }
};
const getVideosById = async (req, res) => {
    try{
        const {id} = req.params
        if(!id){
            return res.status(500).json({msg:'incorrect video id'})
        }
        const videobyId = await video.findById(id)
        if(!videobyId){
            return res.status(404).json({msg:'Video not found'})
        }
        res.status(200).json(videobyId)
        res.redirect(video.cloudinaryUrl)
        

    }catch(error){

    }
};

module.exports = {
  uploadVideo,
  getAllVideos,
  getVideosById,
};
