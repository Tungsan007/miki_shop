import connectMongo from 'src/utils/dbConnect';
import User from 'src/models/User';

async function createProduct(req, res) {
  await connectMongo();
  const { method } = req;
  if (method === 'GET') {
    try {
      const { idAccount } = req.query.id;
      const user = await User.findById('6343d55426fdf64aa62471f2');
      res.json(user);
    } catch (error) {
      console.log(error);
      res.status(500).json(error.message);
    }
  }
}

export default createProduct;
