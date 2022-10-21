const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');
 
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});
 
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    allowed_formats: ['jpg', 'png'],
    folder: 'crossfit' // The name of the folder in cloudinary
    // resource_type: 'raw' => this is in case you want to upload other type of files, not just images
  }
});
  const parser = multer({ storage: storage })

module.exports = parser

