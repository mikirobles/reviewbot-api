import { Message } from "./entities/Message";
import { SendMessageParams } from "./entities/SendMessageParams";

interface MessageService {
  sendMessage(params: SendMessageParams): Promise<Message>;
}

export default MessageService;
