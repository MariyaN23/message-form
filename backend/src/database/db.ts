import {Collection, MongoClient} from "mongodb";
import { MessageType } from "../types/Message";

const mongoUri = process.env.mongoURI || "mongodb://0.0.0.0:27017"

export const client = new MongoClient(mongoUri)

const db = client.db("test")
export const messagesCollection: Collection<MessageType> = db.collection<MessageType>("messages")

export const runDb = async () => {
    try {
        await client.connect()
        await client.db("products").command({ping: 1})
        console.log("Connected successfully to mongo server")
    } catch {
        await client.close()
        console.log("Can't connect to DB")
    }
}