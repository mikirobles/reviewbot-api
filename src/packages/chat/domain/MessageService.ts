import { Message } from "./entities/Message";

interface MessageService {
  sendMessage(id: string, message: string): Promise<Message>;
}

export default MessageService;
