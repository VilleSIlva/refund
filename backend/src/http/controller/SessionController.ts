import type { Request,Response } from "express";
import jwt from 'jsonwebtoken'
import z from "zod";
import { prisma } from "../../db/prisma.ts";
import { compare } from "bcrypt";
import { env } from "../../env/index.ts";

export class SessionController{
    async create(req:Request,res:Response){
        const bodySchema = z.object({
            email:z.string({message:"Email é obrigatório"}).email({message:"Email inválido"}),
            password:z.string({message:"Senha é obrigatória"})
        })

        const {email,password} = bodySchema.parse(req.body)

        const sameEmailExist = await prisma.user.findUnique({where:{email}})

        if(!sameEmailExist){
            return res.status(401).json({message:"Email ou senha inválidos"})
        }

        const isPassswordMatch = await compare(password,sameEmailExist.password);

        if(!isPassswordMatch){
            return res.status(401).json({message:"Email ou senha inválidos"})
        }

        //@ts-ignore
        const token = jwt.sign({role:sameEmailExist.role},env.JWT_SECRET,{
            subject: sameEmailExist.id,
            expiresIn:env.JWT_EXPIRES_IN
        })

        const {password:_,...userWithoutPassword} = sameEmailExist

        return res.status(201).json({
            user:userWithoutPassword,
            token
        })

    }
}