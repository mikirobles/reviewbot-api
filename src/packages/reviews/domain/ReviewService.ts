import { SaveReviewParams } from "../actions/SaveReview";
import Review from "./entities/Review";

interface ReviewService {
  getReviewTemplate(): string;
  saveReview(params: SaveReviewParams): Promise<Review>;
}

export default ReviewService;
