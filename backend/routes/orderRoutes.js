import {
  placeOrder,
  userOrders,
  verifyOrder,
} from "../controllers/orderController.js";
import express from "express";
import { authenticateToken } from "../middleware/auth.js";

export const orderRouter = express.Router();

orderRouter.post("/place", authenticateToken, placeOrder);
orderRouter.post("/verify", verifyOrder);
orderRouter.post("/userorders", authenticateToken, userOrders);
