import connectMongo from 'src/utils/dbConnect';
import Product from 'src/models/Product';
import mongoose from 'mongoose';

async function createProduct(req, res) {
  await connectMongo();
  const { method } = req;
  if (method === 'POST') {
    try {
      const { name, cost, picture, amount, sale, desc, id } = req.body;
      const product = await Product.findByIdAndUpdate(
        { _id: id },
        {
          name,
          cost,
          picture,
          amount,
          sale,
          desc,
        },
      );
      res.status(200).json(product);
    } catch (error) {
      res.json(error.message);
    }
  }
}

export default createProduct;
