import express from 'express'
import { runDb } from "./database/db";
import { messagesRouter } from "./routes/messages-router";
import cors from 'cors'

const app = express()
const port = process.env.PORT || 5000
const corsOptions = {
    origin: ['http://localhost:8080','http://localhost:5173'],
    credentials: true,
}

app.use(cors(corsOptions))
app.use(express.json())
app.use('/api/messages', messagesRouter)

const startApp = async ()=> {
    await runDb()
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })
}

startApp()