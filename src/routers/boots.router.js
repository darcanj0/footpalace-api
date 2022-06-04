import express from "express";
import BootsControllers from "../controllers/boots.controllers.js";
import { verifyBootIdMiddleware } from "../middlewares/verifyBootId.middleware.js";
import { verifyBootContentMiddleware } from "../middlewares/verifyBootContent.middleware.js";

export const bootsRouter = express.Router();
const bootsControllers = new BootsControllers();

bootsRouter.get("/find-boots", bootsControllers.getAllBoots);

bootsRouter.get("/find-boot/:id", verifyBootIdMiddleware, bootsControllers.getBootById);

bootsRouter.post("/create-boot", verifyBootContentMiddleware, bootsControllers.createBoot);

bootsRouter.put("/update-boot/:id", verifyBootIdMiddleware, verifyBootContentMiddleware, bootsControllers.updateBoot);

bootsRouter.delete("/delete-boot/:id", verifyBootIdMiddleware, bootsControllers.deleteBoot);
