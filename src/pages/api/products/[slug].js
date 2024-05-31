import dbConnect from 'src/utils/dbConnect';
import Feedback from 'src/models/Feedback';
import Product from 'src/models/Product';

async function getProducts(req, res) {
  await dbConnect();
  const { method } = req;
  if (method === 'GET') {
    try {
      const slug = req.query.slug;
      const product = await Product.findOne({ slug });
      const feedback = await Feedback.find({ productId: product._id }).populate('userId');
      if (product) {
        return res.status(200).json({ productList: [product], feedBack: feedback });
      }
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}

export default getProducts;
