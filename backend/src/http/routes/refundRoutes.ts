import { Router } from "express";
import { RefundController } from "../controller/RefundController.ts";

const refundController = new RefundController()
const refundRoutes = Router()
refundRoutes.post("/create", refundController.create)

export { refundRoutes }