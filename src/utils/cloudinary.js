const cloudinary = require("cloudinary").v2 

cloudinary.config({
  cloud_name: 'dz5zrejfe',
  api_key: '731932131134713',
  api_secret: '_YwkAMD4YQyfZc2o_Do2mm5vQMo',
  secure: true,
});

module.exports = {cloudinary} ;

