import MessageService from "./packages/chat/domain/MessageService";
import AskForReview from "./packages/reviews/actions/AskForReview";
import ReviewService from "./packages/reviews/domain/ReviewService";

class ActionProvider {
  getAskForReview(
    messageService: MessageService,
    reviewService: ReviewService
  ): AskForReview {
    return new AskForReview(messageService, reviewService);
  }
}

export default ActionProvider;
