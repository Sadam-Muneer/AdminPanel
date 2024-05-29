const adminMiddleware = async (req, res, next) => {
  try {
    console.log(req.user);
    const adminRole = req.user.isAdmin;
    if (!adminRole) {
      return res
        .status(403)
        .json({ msg: "Access denied , user is not an admin" });
    }
    // if user is an admin , proceed to the next middleware
    next();
  } catch (error) {
    next(error);
  }
};
module.exports = adminMiddleware;
