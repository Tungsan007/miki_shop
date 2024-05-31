const verifyToken = (handler) => {
  return async (req, res) => {
    const token = req.headers.accessToken;
    await jwt.verify(token, 'key', (err, user) => {
      if (err) {
        return res.status('403').json('Token invalid!!');
      }
      req.user = user;
    });

    return handler(req, res);
  };
};
export default verifyToken;
