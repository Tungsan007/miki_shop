const withAuth = (handler) => {
  return async (req, res) => {
    const token = req.headers.accessToken;
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "You don't login pls login",
      });
    }
    return handler(req, res);
  };
};
export default withAuth;
