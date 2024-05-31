import dbConnect from 'src/utils/dbConnect';
import Account from 'src/models/Account';
import jwt_decode from 'jwt-decode';
import jwt from 'jsonwebtoken';
import Cookies from 'cookies';
import withAuth from 'src/middlewares/withAuth';
import verifyToken from 'src/middlewares/verifyToken';

async function handler(req, res) {
  await dbConnect();
  const reToken = req.headers.refreshtoken;
  const decoded = jwt_decode(reToken);
  const account = await Account.findById(decoded.id);
  if (reToken == account.refreshToken) {
    try {
      const newAccessToken = jwt.sign({ id: account._id, role: account.role }, 'key', {
        expiresIn: '10d',
      });
      const newRefreshToken = jwt.sign({ id: account._id, role: account.role }, 'key', {
        expiresIn: '365d',
      });
      const updateAccount = await Account.findOneAndUpdate(
        { _id: account._id },
        { refreshToken: newRefreshToken },
        {
          new: true,
        },
      );
      updateAccount.save();
      const cookies = new Cookies(req, res);
      // Set a cookie

      cookies.set('refreshToken', newRefreshToken, {
        httpOnly: true,
      });
      return res.json({ accessToken: newAccessToken });
    } catch (error) {
      return res.json({ message: error.message });
    }
  }
  res.json('Token invalid!!');
}
export default handler;
