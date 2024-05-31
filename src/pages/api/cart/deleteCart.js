import Cart from 'src/models/Cart';
import connectMongo from 'src/utils/dbConnect';

async function createProduct(req, res) {
  await connectMongo();
  const { method } = req;
  if (method === 'POST') {
    try {
      const { _id } = req.body;
      await Cart.findByIdAndDelete(_id);
      res.status(200).json('Delete Success!');
    } catch (error) {
      res.json(error.message);
    }
  }
}

export default createProduct;
