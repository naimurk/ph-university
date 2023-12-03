/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import express, { Application, NextFunction, Request, Response } from "express"
import cors from "cors"
import { UserRouter } from "./app/module/users/users.routes"
import { globalErrorHandler } from "./app/midleware/globalErrorHandler"
import { notFoundRoutes } from "./app/midleware/notFoundRoutes"
import { router } from "./app/routes/routes"


const app:Application = express()

// parsers
app.use(express.json())
app.use(express.text())

// cors
app.use(cors())




app.use("/api" ,router)

app.get('/', (req, res) => {
  res.send('Hello World!')
})




// global error handlers
app.use(globalErrorHandler)

// not found 
app.use(notFoundRoutes)

export default app