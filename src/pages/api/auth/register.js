import connectMongo from 'src/utils/dbConnect';
import Account from 'src/models/Account';
import User from 'src/models/User';
import bcrypt from 'bcrypt';

// Create User Account
export default async function handler(req, res) {
  await connectMongo();
  const { method } = req;
  if (method === 'POST') {
    try {
      const check = await Account.findOne({ email: req.body.email });
      if (check) return res.status(403).json('Email đã được tạo');

      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(req.body.password, salt);
      // create new user

      const user = new User({ firstName: req.body.firstName, lastName: req.body.lastName });
      const newUser = await user.save();

      // create new account
      const account = new Account({
        email: req.body.email,
        password: hash,
        userInfor: newUser._id,
      });
      const newAccount = await account.save();
      // save to database
      res.status(200).json('Register success!!');
    } catch (error) {
      res.json(error);
    }
  }
}
