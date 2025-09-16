import { Request, Response, Router } from "express";
import { MessageType } from "../types/Message";
import { messagesService } from "../services/messages-service";
import { messageBodyValidation, messageValidationMiddleware } from "../middlewares/message-validation-middleware";

export const messagesRouter = Router({})

messagesRouter.get('/', async (req: Request, res: Response) => {
    const messages: MessageType[] = await messagesService.findMessages()
    res.status(200).send(messages)
})

messagesRouter.post('/',
    messageBodyValidation,
    messageValidationMiddleware,
    async (req: Request, res: Response) => {
    const newMessage: MessageType = await messagesService.createMessage(req.body)
    res.status(201).send(newMessage)
})
