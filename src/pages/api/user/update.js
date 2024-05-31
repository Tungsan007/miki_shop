import connectMongo from 'src/utils/dbConnect';
import User from 'src/models/User';
import Account from 'src/models/Account';
import bcrypt from 'bcrypt';

async function createProduct(req, res) {
  await connectMongo();
  const { method } = req;
  if (method === 'PATCH') {
    try {
      const {
        firstName,
        lastName,
        image,
        gender,
        address,
        phoneNumber,
        dateOfBirth,
        password,
        idAccount,
      } = req.body;
      if (password) {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        await Account.findByIdAndUpdate(idAccount, { password: hash });
      }
      const account = await Account.findById(idAccount).populate('userInfor');
      const idUser = account.userInfor._id;
      await User.findByIdAndUpdate(idUser, {
        firstName,
        lastName,
        image,
        gender,
        address,
        phoneNumber,
        dateOfBirth,
      });
      res.status(200).json('update success!');
    } catch (error) {
      console.log(error);
      res.status(500).json(error.message);
    }
  }
}

export default createProduct;
