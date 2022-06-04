import { Router } from "express";
import UsersControllers from "../controllers/users.controllers.js";
import { verifyUserIdMiddleware } from "../middlewares/verifyUserId.middleware.js";
import { verifyUserContentMiddleware } from "../middlewares/verifyUserContent.middleware.js";

const usersControllers = new UsersControllers();
export const usersRouter = Router();

usersRouter.get("/find-users", usersControllers.getAllUsers);

usersRouter.get(
  "/find-user/:id",
  verifyUserIdMiddleware,
  usersControllers.getUserById
);

usersRouter.post(
  "/create-user",
  verifyUserContentMiddleware,
  usersControllers.createUser
);

usersRouter.put(
  "/update-user/:id",
  verifyUserIdMiddleware,
  verifyUserContentMiddleware,
  usersControllers.updateUser
);

usersRouter.delete(
  "/delete-user/:id",
  verifyUserIdMiddleware,
  usersControllers.deleteUser
);
