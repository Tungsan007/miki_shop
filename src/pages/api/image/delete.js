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
  };
  const { method } = req;
  if (method === 'POST') {
    if (Array.isArray(req.body.files)) {
      let res_promises = req.body.files.map(
        (file) =>
          new Promise(async (resolve, reject) => {
            const uploadResponse = await cloudinary.uploader.destroy(file, options);
            console.log(uploadResponse);
            if (!uploadResponse) reject();
            else {
              resolve();
            }
          }),
      );
      // Promise.all will fire when all promises are resolved
      Promise.all(res_promises)
        .then((result) => res.status(200).json('Delete success!!'))
        .catch((error) =>
          /*  handle error */
          res.status(500).json(error.message),
        );
    } else {
      try {
        const uploadResponse = await cloudinary.uploader.destroy(req.body.file._id, options);
        res.status(200).json('Delete success!!');
      } catch (error) {
        res.status(500).json(error.message);
      }
    }
  }
};

export default upload_image;
