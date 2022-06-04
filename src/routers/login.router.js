import { Router } from "express";
import LoginControllers from "../controllers/login.controllers.js";

const loginControllers = new LoginControllers();

export const loginRouter = Router();

loginRouter.post("", loginControllers.signIn);
