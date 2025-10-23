import { Router } from "express";
import { UserController } from "../controller/UserController.ts";

export function userRoute(){
    const userController = new UserController()
    const userRoute =  Router()

    userRoute.post("/create",userController.create);

    return userRoute
}