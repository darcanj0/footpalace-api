export const verifyBootContentMiddleware = (req, res, next) => {
  const { name, description, price, img } = req.body;
  if (!name || !description || !price || !img) {
    return res
      .status(400)
      .send({ message: "Fill all the boot fields before sending!" });
  }
  next();
};
