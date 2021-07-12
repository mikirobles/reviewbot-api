import AskForReview from "../AskForReview";
import Substitute, { SubstituteOf } from "@fluffy-spoon/substitute";
import ReviewService from "../../domain/ReviewService";
import { Message } from "../../../chat/domain/entities/Message";
import MessageService from "../../../chat/domain/MessageService";

describe("AskForReview - Unit tests", () => {
  let messageService: SubstituteOf<MessageService>;
  let reviewService: SubstituteOf<ReviewService>;

  it("should send a message", async () => {
    messageService = Substitute.for<MessageService>();
    reviewService = Substitute.for<ReviewService>();

    const fakeTemplate = "Fake template";
    const expectedResponse: Message = {
      targetId: "fake-target-id",
      messageId: "fake-message-id",
    };

    messageService
      .sendMessage({ id: expectedResponse.targetId, message: fakeTemplate })
      .resolves(expectedResponse);
    reviewService.getReviewTemplate().returns(fakeTemplate);

    const action = new AskForReview(messageService, reviewService);
    const response = await action.execute({
      targetId: expectedResponse.targetId,
    });

    expect(response).toEqual(expectedResponse);
  });
});
