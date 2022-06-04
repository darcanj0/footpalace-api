import express from "express";
import cors from "cors";
import { bootsRouter } from "./routers/boots.router.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use("/boots", bootsRouter);

export default app;
