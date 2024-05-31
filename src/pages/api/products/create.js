import connectMongo from 'src/utils/dbConnect';
import Product from 'src/models/Product';

async function createProduct(req, res) {
  await connectMongo();
  const { method } = req;
  if (method === 'POST') {
    console.log(req.body);
    try {
      const product = await Product.create(req.body);
      res.status(201).json(product);
    } catch (error) {
      console.log(error);
      res.status(500).json(error.message);
    }
  }
}

export default createProduct;
