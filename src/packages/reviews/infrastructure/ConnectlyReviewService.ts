import ReviewService from "../domain/ReviewService";

class ConnectlyReviewService implements ReviewService {
  getReviewTemplate(): string {
    return `Hi! Thanks for buying our product. Could you please tell us what you think of it?`;
  }
}

export default ConnectlyReviewService;
