import { MessagingType } from "./MessagingType";

export interface SendFacebookMessagePayload {
  messaging_type: MessagingType;
  recipient: {
    id: string;
  };
  message: {
    text: string;
  };
}
