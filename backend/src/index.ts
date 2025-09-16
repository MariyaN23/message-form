import express from 'express'
import { runDb } from "./database/db";
import { messagesRouter } from "./routes/messages-router";

const app = express()
const port = process.env.PORT || 5000

app.use(express.json())

app.use('/api/messages', messagesRouter)

const startApp = async ()=> {
    await runDb()
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })
}

startApp()