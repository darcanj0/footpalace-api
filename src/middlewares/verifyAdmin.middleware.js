import Users from "../models/User.js";
import { verifyUserIdMiddleware } from "./verifyUserId.middleware.js";

export const verifyAdminMiddleware = async (req, res, next) => {
  const requirerId = req.headers.requirerid;
  if (!requirerId) {
    return res.status(400).send({
      message:
        "Requirer id was not sent in headers! You must send the requirer's id for this operation!",
    });
  }

  const requirer = await Users.findById(requirerId);
  if (!requirer) {
    return res.status(404).send({ message: "Requirer's ID wasn't found!" });
  }

  if (requirer.admin) {
    next();
  } else {
    return res
      .status(401)
      .send({ message: "This requirer is not an administrator!" });
  }
};
