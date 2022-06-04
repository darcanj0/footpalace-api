import Users from "../models/User.js";
import mongoose from "mongoose";

export const verifyUserIdMiddleware = async (req, res, next) => {
  const idParam = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: "User ID is not valid!" });
  }
  const selectedUser = await Users.findById(idParam);
  if(!selectedUser) {
    return res.status(404).send({message: "User not found!"});
  }
  next();
};
