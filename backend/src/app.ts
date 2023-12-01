import express, { Application } from "express"
import cors from "cors"
import { UserRouter } from "./app/module/users/users.routes"

const app:Application = express()

// parsers
app.use(express.json())
app.use(express.text())

// cors
app.use(cors())




app.use("/api/users", UserRouter)

app.get('/', (req, res) => {
  res.send('Hello World!')
})




export default app