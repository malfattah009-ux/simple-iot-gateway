import express from "express";
import { handleData } from "../controllers/iotController.js";
const router = express.Router();

// Endpoint untuk menerima data sensor
router.post("/data", handleData);

export default router;
