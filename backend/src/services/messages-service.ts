import { MessageType } from "../types/Message";
import { messagesRepository } from "../repositories/messages-repository";

export const messagesService = {
    async findMessages(): Promise<MessageType[]> {
        return messagesRepository.findMessages()
    },
    async createMessage(message: MessageType): Promise<MessageType> {
        return await messagesRepository.createMessage(message)
    },
}