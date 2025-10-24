import type { Request, Response, NextFunction } from "express";
import { AppError } from "../utils/AppErro.ts";

type Role = "Employee" | "Manager"

export function verifyUserRole(roles:Role[]){
    return (req:Request,res:Response,next:NextFunction)=>{
        if(!req.user || !roles.includes(req.user.role as Role)){
            throw new AppError("Insufficient permissions",403)
        }

        next();

    }
}