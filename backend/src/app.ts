import 'express-async-error'
import express from 'express'
import cors from 'cors'

import {routes} from './http/routes/index.ts'
import { errorHandler } from './middleware/error-handler.ts'

const app= express()

app.use(express.json())

app.use(cors())

app.use(routes)

app.use(errorHandler)


export {app}