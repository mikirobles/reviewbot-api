import MessageService from "./packages/chat/domain/MessageService";
import AskForReview from "./packages/reviews/actions/AskForReview";
import SaveReview from "./packages/reviews/actions/SaveReview";
import ReviewService from "./packages/reviews/domain/ReviewService";

class ActionProvider {
  getAskForReview(
    messageService: MessageService,
    reviewService: ReviewService
  ): AskForReview {
    return new AskForReview(messageService, reviewService);
  }
  getSaveReview(reviewService: ReviewService): SaveReview {
    return new SaveReview(reviewService);
  }
}

export default ActionProvider;
