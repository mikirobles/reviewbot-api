import SendMessage from "./packages/chat/actions/SendMessage";
import MessageService from "./packages/chat/domain/MessageService";

class ActionProvider {
  getSendMessage(messageService: MessageService): SendMessage {
    return new SendMessage(messageService);
  }
}

export default ActionProvider;
