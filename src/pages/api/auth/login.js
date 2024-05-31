import dbConnect from 'src/utils/dbConnect';
import Account from 'src/models/Account';
import User from 'src/models/User';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Cookies from 'cookies';

// Login User Account
export default async function handler(req, res) {
  await dbConnect();
  const { method } = req;
  if (method === 'POST') {
    try {
      const account = await Account.findOne({ email: req.body.email });
      if (!account) return res.status(401).json('Sai mật khẩu hoặc tài khoản');
      const compaired = await bcrypt.compare(req.body.password, account.password);
      if (!compaired) return res.status(401).json('Sai mật khẩu hoặc tài khoản');
      if (compaired) {
        const token = jwt.sign({ id: account._id, role: account.role }, 'key', {
          expiresIn: '10d',
        });
        const refreshToken = jwt.sign({ id: account._id, role: account.role }, 'key', {
          expiresIn: '365d',
        });
        const updateAccount = await Account.findOneAndUpdate(
          { email: account.email },
          { refreshToken: refreshToken },
          {
            new: true,
          },
        );
        updateAccount.save();
        const cookies = new Cookies(req, res);
        // Set a cookie

        cookies.set('refreshToken', refreshToken, {
          httpOnly: true,
        });
        const user = await Account.findById(account._id)
          .populate('userInfor')
          .select('-password -refreshToken');
        res.json({ user, accessToken: token });
      }
    } catch (error) {
      res.json({ message: error.message });
    }
  }
}
