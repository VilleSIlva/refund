import { Router } from "express";
import { userRoute } from "./userRoute.ts";
import { sessionRoute } from "./sessionRoute.ts";
import { verifyToken } from "../../middleware/verify-token-jwt.ts";
import { refundRoutes } from "./refundRoutes.ts";
import { verifyUserRole } from "../../middleware/verify-user-role.ts";
import { Role } from "@prisma/client";

const routes = Router();

// Public routes
routes.use("/users",userRoute());
routes.use("/session",sessionRoute)

// Protected routes
routes.use(verifyToken);
routes.use("/refunds",verifyUserRole(["Employee"]), refundRoutes);


export {routes}
