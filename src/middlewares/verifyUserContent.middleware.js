export const verifyUserContentMiddleware = async (req, res, next) => {
  const { email, name, password } = req.body;
  if (!email || !name || !password) {
    return res
      .status(400)
      .send({ message: "Fill all the user fields before sending!" });
  }
  next();
};
