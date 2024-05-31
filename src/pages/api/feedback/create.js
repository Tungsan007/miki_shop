import connectMongo from 'src/utils/dbConnect';
import Feedback from 'src/models/Feedback';

async function createProduct(req, res) {
  await connectMongo();
  const { method } = req;
  if (method === 'POST') {
    try {
      const { images, desc, rating, userId, repId, productId } = req.body;
      const feedback = await Feedback.create({ images, desc, rating, userId, repId, productId });
      res.status(201).json(feedback);
    } catch (error) {
      console.log(error);
      res.status(500).json(error.message);
    }
  }
}

export default createProduct;
