import { Router } from "express";
import { SessionController } from "../controller/SessionController.ts";


const sessionRoute = Router()
const sessionController = new SessionController()

sessionRoute.post("/create",sessionController.create)

export{sessionRoute}