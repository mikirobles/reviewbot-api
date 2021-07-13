import { SaveReviewParams } from "../actions/SaveReview";
import Review from "../domain/entities/Review";
import ReviewService from "../domain/ReviewService";

class ConnectlyReviewService implements ReviewService {
  getReviewTemplate(): string {
    return `Hi! Thanks for buying our product. Could you please tell us what you think of it?`;
  }
  async saveReview(params: SaveReviewParams): Promise<Review> {
    const fakeId = "fake-id";
    return {
      id: fakeId,
      userId: params.targetId,
      message: params.reviewMessage,
    };
  }
}

export default ConnectlyReviewService;
