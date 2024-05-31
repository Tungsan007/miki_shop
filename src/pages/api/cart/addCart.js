import Cart from 'src/models/Cart';
import User from 'src/models/User';
import connectMongo from 'src/utils/dbConnect';

async function createProduct(req, res) {
  await connectMongo();
  const { method } = req;
  if (method === 'POST') {
    try {
      const { userId, productId, color, size, quantity, cost } = req.body;
      const checkUser = await User.findById(userId);
      if (checkUser === {}) {
        return res.json('Not found user');
      }
      const checkExist = await Cart.find({ userId, productId, size, color, cost });
      if (checkExist.length > 0) {
        const updateCart = await Cart.findByIdAndUpdate(checkExist[0]._id, {
          quantity: checkExist[0].quantity + quantity,
        });
        const amount = await Cart.find({ userId: updateCart.userId });
        return res.status(200).json(amount.length);
      }
      const newCart = await Cart.create(req.body);
      const amount = await Cart.find({ userId: newCart.userId });
      return res.status(201).json(amount.length);
    } catch (error) {
      res.json(error.message);
    }
  }
}

export default createProduct;
