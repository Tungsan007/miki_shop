import { cloudinary } from 'src/utils/cloudinary';

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '50mb',
    },
  },
};

const upload_image = async (req, res) => {
  // res_promises will be an array of promises
  const options = {
    upload_preset: 'ihyzcvjx',
    overwrite: true,
  };
  const { method } = req;
  if (method === 'POST') {
    console.log(Array.isArray(req.body.files));
    if (Array.isArray(req.body.files)) {
      let res_promises = req.body.files.map(
        (file) =>
        new Promise( async (resolve, reject) => {
          const uploadResponse = await cloudinary.uploader.upload(file, options);
          if(!uploadResponse) reject();
          else {
            resolve({
              _id: uploadResponse.public_id,
              url: uploadResponse.secure_url,
            })
          }
        }),
        );
        // Promise.all will fire when all promises are resolved
        Promise.all(res_promises)
        .then((result) =>  res.status(201).json({ result }) )          
        .catch((error) => {
          /*  handle error */
          res.status(500).json(error.message);
        });
    } else {
      try {
        const uploadResponse = await cloudinary.uploader.upload(req.body.file, options);
        res.status(200).json({
          _id: uploadResponse.public_id,
          url: uploadResponse.secure_url,
        });
      } catch (error) {
        res.status(500).json(error.message);
      }
    }
  }
};

export default upload_image;
