import AskForReview from "../AskForReview";
import Substitute, { SubstituteOf } from "@fluffy-spoon/substitute";
import ReviewService from "../../domain/ReviewService";
import { Message } from "../../../chat/domain/entities/Message";
import SaveReview, { SaveReviewParams } from "../SaveReview";
import Review from "../../domain/entities/Review";

describe("SaveReview - Unit tests", () => {
  let reviewService: SubstituteOf<ReviewService>;

  it("should send a message", async () => {
    const fakeParams: SaveReviewParams = {
      targetId: "fake-target-id",
      reviewMessage: "I enjoyed using this product!",
    };
    const expectedResponse: Review = {
      userId: fakeParams.targetId,
      message: fakeParams.reviewMessage,
      id: "fake-review-id",
    };
    reviewService = Substitute.for<ReviewService>();

    reviewService.saveReview(fakeParams).resolves(expectedResponse);

    const action = new SaveReview(reviewService);
    const response = await action.execute(fakeParams);

    expect(response).toStrictEqual(expectedResponse);
  });
});
