import type {ErrorRequestHandler} from 'express'
import {AppError} from '../utils/AppErro.ts'
import {ZodError} from 'zod'
import chalk from 'chalk'

export const errorHandler:ErrorRequestHandler = (err,req,res,next)=>{
    if(err instanceof AppError ){

        console.error(chalk.red('[AppError',err.message))

        return res.status(err.statusCode).json({
            code:err.statusCode,
            message:err.message
        })
    }

    if(err instanceof ZodError){
        console.error(chalk.red('[ZodError]', err.format))
        return res.status(400).json({
            code:400,
            message:err.format()
        })
    }
    console.error(chalk.red('[Error]', err))
    return res.status(500).send({
        code:500,
        message:'Internal Server Error'
    })
}