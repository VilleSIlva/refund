import type { Request, Response } from "express";

export class RefundController{
    async create(req:Request,res:Response){
        res.status(201).json("Refund created");
    }
}