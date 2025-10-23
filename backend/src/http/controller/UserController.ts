import type { Request,Response, } from "express";
import { Role } from "@prisma/client";
import { hash } from "bcrypt";
import z from "zod";

import { prisma } from "../../db/prisma.ts";
import { AppError } from "../../utils/AppErro.ts";

export class UserController{

    async create(req:Request,res:Response){

        const schemaBody = z.object({
            name:z.string({message:"Nome é obrigatório"})
            .min(3,{message:"Nome deve ter no mínimo 3 caracteres"}),
            email:z.string({message:"Email é obrigatório"}).email({message:"Email inválido"}),
            password:z.string({message:"Senha é obrigatória"})
            .min(6,{message:"Senha deve ter no mínimo 6 caracteres"}),
            role: z.enum([Role.Employee,Role.Manager]).default(Role.Employee)
        })

        const {name,email,password,role} = schemaBody.parse(req.body)

        const sameEmailExist = await prisma.user.findUnique({where:{email}})

        if(sameEmailExist){
            throw new AppError('Já existe um usuário com esse email',409)
        }

        const passwordHash = await hash(password,8)

        const user = await prisma.user.create({
            data:{
                name,
                email,
                password:passwordHash,
                role
            }
        })

        const {password:_,...userWithoutPassword} = user

        return res.status(201).json({
            user:userWithoutPassword
        })

    }
}