import type { NextFunction,Request,Response } from "express";
import jwt from 'jsonwebtoken'
import { env } from "../env/index.ts";

interface JwtPayload{
    sub:string
    role:string
}

export function verifyToken(req:Request,res:Response,next:NextFunction){
   try{
    const authHeader = req.headers.authorization
    const token = authHeader?.split(" ")[1]

    if(!token){
        return res.status(401).json({message:"Token missing"})
    }
    
    const {role,sub} = jwt.verify(token,env.JWT_SECRET) as JwtPayload

    req.user = {
        id:sub,
        role
    }
    
    next()
    
   }catch(err){
    return res.status(401).json({message:"Invalid token"})
   }

}