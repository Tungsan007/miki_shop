import  connectMongo  from 'src/utils/dbConnect';
import Product from 'src/models/Product';

async function getProducts(req, res) {
  await connectMongo();
  const { method } = req;
  if (method === 'GET') {
    try {
      const products = await Product.find({});
      if (products) {
        return res.status(200).json({ products });
      }
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}

export default getProducts;
