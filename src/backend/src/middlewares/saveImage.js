const cloudinary = require("cloudinary").v2;
require("dotenv").config();
// Configuration

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

// Upload

async function upload(req, res, next) {
  try {
    const image = req.files.image;
    const result = await cloudinary.uploader.upload(image.tempFilePath, {
      public_id: `${Date.now()}`,
      resource_type: "image",
      folder: "images",
    });
    req.image = result.secure_url;
    next();
  } catch (error) {
    console.log(error);
  }
}

module.exports = { upload };
