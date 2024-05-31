import Cart from 'src/models/Cart';
import connectMongo from 'src/utils/dbConnect';

async function createProduct(req, res) {
  await connectMongo();
  const { method } = req;
  if (method === 'POST') {
    try {
      const { userId } = req.body;
      const check = await Cart.find({ userId });
      // console.log(check);
      if (check.length <= 0) return res.status(200).json([]);
      const checkCart = await Cart.find({ userId }).populate('productId');
      return res.status(200).json(checkCart);
    } catch (error) {
      res.json(error.message);
    }
  }
}

export default createProduct;
