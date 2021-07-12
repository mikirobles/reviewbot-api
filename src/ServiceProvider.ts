import MessageService from "./packages/chat/domain/MessageService";
import FacebookMessageService from "./packages/chat/infrastructure/FacebookMessageService";
import HTTPService from "./packages/http/domain/HTTPService";
import FakeHTTPService from "./packages/http/infrastructure.ts/FakeHTTPService";
import ReviewService from "./packages/reviews/domain/ReviewService";
import ConnectlyReviewService from "./packages/reviews/infrastructure/ConnectlyReviewService";

class ServiceProvider {
  getHTTPService(): HTTPService {
    return new FakeHTTPService();
  }
  getMessageService(): MessageService {
    return new FacebookMessageService(this.getHTTPService());
  }
  getReviewService(): ReviewService {
    return new ConnectlyReviewService();
  }
}

export default ServiceProvider;
