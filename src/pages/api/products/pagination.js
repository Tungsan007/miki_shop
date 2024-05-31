import connectMongo from 'src/utils/dbConnect';
import Product from 'src/models/Product';

async function getProducts(req, res) {
  await connectMongo();
  const { method } = req;
  if (method === 'GET') {
    try {
      let limitProducts = 0,
        pages = 1,
        sorts = {};
      if (req.query) {
        const { limitProduct, page, cost, ...sort } = req.query;
        limitProducts = limitProduct;
        pages = page;
        sorts = sort;
        if (cost) {
          if (cost === 'asc') sorts['amount.cost'] = 1;
          else {
            sorts['amount.cost'] = -1;
          }
        }
      }
      const skipProducts = limitProducts * (pages - 1) || 0;
      const totalProducts = await Product.find({});
      const products = await Product.find({})
        .sort(sorts)
        .skip(skipProducts)
        .limit(limitProducts || null);
      if (products) {
        return res.status(200).json({
          data: products,
          pagination: {
            _page: +pages,
            _limit: +limitProducts,
            _totalProducts: totalProducts.length,
          },
        });
      }
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}

export default getProducts;
