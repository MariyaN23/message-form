import {Collection, MongoClient} from "mongodb";
import { MessageType } from "../types/Message";

const mongoUri = process.env.mongoURI || "mongodb://host.docker.internal:27017/test"

export const client = new MongoClient(mongoUri)

const db = client.db("test")
export const messagesCollection: Collection<MessageType> = db.collection<MessageType>("messages")

export const runDb = async () => {
    try {
        await client.connect()
        await client.db("messages").command({ping: 1})
    } catch {
        await client.close()
    }
}