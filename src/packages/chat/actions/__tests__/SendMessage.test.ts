import MessageService from "../../domain/MessageService";
import SendMessage from "../SendMessage";
import Substitute, { SubstituteOf } from "@fluffy-spoon/substitute";
import { Message } from "../../domain/entities/Message";

describe("SendMessage - Unit tests", () => {
  let messageService: SubstituteOf<MessageService>;

  it("should send a message", async () => {
    messageService = Substitute.for<MessageService>();
    const expectedResponse: Message = {
      targetId: "fake-target-id",
      messageId: "fake-message-id",
    };
    messageService
      .sendMessage(expectedResponse.targetId, "Fake message")
      .resolves(expectedResponse);

    const action = new SendMessage(messageService);
    const response = await action.execute({
      targetId: expectedResponse.targetId,
      message: "Fake message",
    });

    expect(response).toEqual(expectedResponse);
  });
});
