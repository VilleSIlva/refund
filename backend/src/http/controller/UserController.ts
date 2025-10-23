import type { Request,Response, } from "express";

export class UserController{
    async create(req:Request,res:Response){
        return res.send("User created");
    }
}