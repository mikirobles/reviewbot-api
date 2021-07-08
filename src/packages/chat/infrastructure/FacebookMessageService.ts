import HTTPService from "../../http/domain/HTTPService";
import { Message } from "../domain/entities/Message";
import MessageService from "../domain/MessageService";
import { MessagingType } from "./entities/MessagingType";
import { SendFacebookMessagePayload } from "./entities/SendFacebookMessagePayload";
import { SendFacebookMessageResponse } from "./entities/SendFacebookMessageResponse";

class FacebookMessageService implements MessageService {
  constructor(private httpService: HTTPService) {}

  async sendMessage(id: string, message: string): Promise<Message> {
    const response = await this.httpService.post<
      SendFacebookMessagePayload,
      SendFacebookMessageResponse
    >(
      `https://graph.facebook.com/v11.0/me/messages?access_token=${process.env.MESSENGER_ACCESS_TOKEN}`,
      {
        messaging_type: MessagingType.update,
        recipient: {
          id,
        },
        message: {
          text: message,
        },
      }
    );
    return {
      targetId: response.recipient_id,
      messageId: response.message_id,
    };
  }
}

export default FacebookMessageService;
