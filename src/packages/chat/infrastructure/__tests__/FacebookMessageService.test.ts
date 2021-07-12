import Substitute, { Arg, SubstituteOf } from "@fluffy-spoon/substitute";
import HTTPService from "../../../http/domain/HTTPService";
import { Message } from "../../domain/entities/Message";
import { MessagingType } from "../entities/MessagingType";
import { SendFacebookMessagePayload } from "../entities/SendFacebookMessagePayload";
import { SendFacebookMessageResponse } from "../entities/SendFacebookMessageResponse";
import FacebookMessageService from "../FacebookMessageService";

describe("FacebookMessageService - Unit tests", () => {
  let httpService: SubstituteOf<HTTPService>;
  let service: FacebookMessageService;
  beforeEach(() => {
    httpService = Substitute.for<HTTPService>();
    service = new FacebookMessageService(httpService);
  });
  it("should send a message", async () => {
    const expectedResponse: Message = {
      targetId: "fake-target",
      messageId: "fake-message-id",
    };
    httpService
      .post(Arg.any(), {
        messaging_type: MessagingType.update,
        recipient: {
          id: expectedResponse.targetId,
        },
        message: {
          text: "Fake message",
        },
      })
      .resolves({
        recipient_id: expectedResponse.targetId,
        message_id: expectedResponse.messageId,
      });

    const response = await service.sendMessage({
      id: expectedResponse.targetId,
      message: "Fake message",
    });

    expect(response).toEqual(expectedResponse);
  });
});
