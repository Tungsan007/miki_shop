import  connectMongo  from 'src/utils/dbConnect';
import Product from 'src/models/Product';
import mongoose from 'mongoose';

async function createProduct(req, res) {
  await connectMongo();
  const { method } = req;
  if (method === 'POST') {
    try {
      const ids = req.body.id;
      console.log(ids);
      ids.map( async (item) => {
      return await Product.deleteOne({ _id: item });
      })
      res.status(200).json('remove success');
    } catch (error) {
      res.json(error.message);
    }
  }
}

export default createProduct;
