import { Message } from "../../chat/domain/entities/Message";
import MessageService from "../../chat/domain/MessageService";
import ReviewService from "../domain/ReviewService";

interface AskForReviewParams {
  targetId: string;
}

class AskForReview {
  constructor(
    private messageService: MessageService,
    private reviewService: ReviewService
  ) {}

  execute(params: AskForReviewParams): Promise<Message> {
    const reviewTemplate = this.reviewService.getReviewTemplate();
    return this.messageService.sendMessage({
      id: params.targetId,
      message: reviewTemplate,
    });
  }
}

export default AskForReview;
