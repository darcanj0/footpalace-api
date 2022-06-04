import express from "express";
import cors from "cors";
import { bootsRouter } from "./routers/boots.router.js";
import { usersRouter } from "./routers/users.router.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use("/boots", bootsRouter);
app.use("/users", usersRouter);

export default app;
