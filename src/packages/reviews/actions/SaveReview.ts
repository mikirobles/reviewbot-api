import MessageService from "../../chat/domain/MessageService";
import Review from "../domain/entities/Review";
import ReviewService from "../domain/ReviewService";

export interface SaveReviewParams {
  targetId: string;
  reviewMessage: string;
}

class SaveReview {
  constructor(private reviewService: ReviewService) {}

  execute(params: SaveReviewParams): Promise<Review> {
    const review = this.reviewService.saveReview(params);
    return review;
  }
}

export default SaveReview;
