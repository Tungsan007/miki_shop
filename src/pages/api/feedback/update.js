import connectMongo from 'src/utils/dbConnect';
import Feedback from 'src/models/Feedback';

async function updateProduct(req, res) {
  await connectMongo();
  const { method } = req;
  if (method === 'PATCH') {
    try {
      const { images, desc, rating, idFeedback } = req.body;
      const feedback = await Feedback.findByIdAndUpdate(idFeedback, {
        images,
        desc,
        rating,
      });
      res.status(201).json(feedback);
    } catch (error) {
      console.log(error);
      res.status(500).json(error.message);
    }
  }
}

export default updateProduct;
