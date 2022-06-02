import app from "./app.js";
import { config } from "dotenv";
import { env } from "process";
import { connectToDatabase } from "./database/database.js";

config();

const PORT = env.PORT || 3001;

app.listen(PORT, () => {
  connectToDatabase();
  console.log(`Running at port ${PORT}`);
});
