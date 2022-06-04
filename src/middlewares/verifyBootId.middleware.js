import Boots from "../models/Boot.js";
import mongoose from "mongoose";

export const verifyBootIdMiddleware = async (req, res, next) => {
  const idParam = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: "Boot ID is not valid!" });
  }

  const boot = await Boots.findById(idParam);
  if (!boot) {
    return res.status(404).send({ message: "Boot not found!" });
  }

  next();
};
