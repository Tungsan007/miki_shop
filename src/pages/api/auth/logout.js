import dbConnect from 'src/utils/dbConnect';
import Account from 'src/models/Account';
import Cookies from 'cookies';
import jwt_decode from 'jwt-decode';
import withAuth from 'src/middlewares/withAuth';

// Login User Account
async function handler(req, res) {
  await dbConnect();
  const { method } = req;
  if (method === 'POST') {
    try {
      const decoded = jwt_decode(req.cookies.accessToken);
      const updateAccount = await Account.findOneAndUpdate(
        { _id: decoded.id },
        { refreshToken: '' },
        {
          new: true,
        },
      );
      updateUser.save();

      const cookies = new Cookies(req, res);
      cookies.set('refreshToken');
      res.json('Logout success!');
    } catch (error) {
      res.json({ message: error.message });
    }
  }
}

export default withAuth(handler);
