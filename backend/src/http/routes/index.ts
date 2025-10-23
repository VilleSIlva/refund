import { Router } from "express";
import { userRoute } from "./userRoute.ts";

const routes = Router();

routes.use("/users",userRoute());

export {routes}
