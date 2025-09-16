import axios from 'axios';
import { MessageType } from "../types/message";

export const instance = axios.create({
    baseURL: 'http://localhost:5000/api/',
})

export const API = {
    addMessage(message: MessageType) {
        return instance.post<MessageType>('messages', message)
    },
}