import connectMongo from 'src/utils/dbConnect';
import Account from 'src/models/Account';

async function createProduct(req, res) {
  await connectMongo();
  const { method } = req;
  if (method === 'POST') {
    try {
      const { idAccount } = req.body;
      const account = await Account.findById(idAccount);
      res.status(200).json(account);
    } catch (error) {
      console.log(error);
      res.status(500).json(error.message);
    }
  }
}

export default createProduct;
