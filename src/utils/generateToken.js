const jwt = require('jsonwebtoken');

const generateToken = (account) => {
  const token = jwt.sign({ id: account._id, role: account.role }, 'key', {
    expiresIn: '10d',
  });
  const refreshToken = jwt.sign({ id: account._id, role: account.role }, 'key', {
    expiresIn: '365d',
  });
  return { token, refreshToken };
};

export default generateToken;
