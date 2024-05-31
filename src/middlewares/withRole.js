const withAuth = (handler, ...roles) => {
  return async (req, res) => {
    if (roles.includes(req.user.role) === -1) {
      res.status(403).json('Ban khong co quyen truy cap vao!!');
    }
    return handler(req, res);
  };
};
export default withAuth;
