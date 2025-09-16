import { MessageType } from "../types/Message";
import { messagesCollection } from "../database/db";

export const messagesRepository = {
    async findMessages(): Promise<MessageType[]> {
        return messagesCollection.find().toArray()
    },
    async createMessage(message: MessageType): Promise<MessageType> {
        await messagesCollection.insertOne(message)
        return message
    },
}