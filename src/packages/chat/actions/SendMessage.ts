import { Message } from "../domain/entities/Message";
import MessageService from "../domain/MessageService";

interface SendMessageParams {
  targetId: string;
  message: string;
}

class SendMessage {
  constructor(private messageService: MessageService) {}

  async execute(params: SendMessageParams): Promise<Message> {
    return this.messageService.sendMessage(params.targetId, params.message);
  }
}

export default SendMessage;
