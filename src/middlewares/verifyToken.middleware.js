import jwt from "jsonwebtoken";
export const verifyTokenMiddleware = (req, res, next) => {
  const token = req.headers.authorization;
  if (token === undefined) {
    return res.status(401).send({ message: "Token was not sent!" });
  }

  jwt.verify(token, "secret", (error, decode) => {
    if (error) {
      return res.status(401).send({ message: "Invalid token!" });
    }

    next();
  });
};
