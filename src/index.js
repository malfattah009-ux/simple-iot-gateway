import express from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import iotRoutes from "./routes/iot.js";
import logger from "./middlewares/logger.js";

dotenv.config();

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(logger);

app.use("/iot", iotRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () =>
  console.log(`🚀 IoT Gateway running on http://localhost:${PORT}`)
);
