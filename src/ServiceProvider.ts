import MessageService from "./packages/chat/domain/MessageService";
import FacebookMessageService from "./packages/chat/infrastructure/FacebookMessageService";
import HTTPService from "./packages/http/domain/HTTPService";
import FakeHTTPService from "./packages/http/infrastructure.ts/FakeHTTPService";

class ServiceProvider {
  getHTTPService(): HTTPService {
    return new FakeHTTPService();
  }
  getMessageService(): MessageService {
    return new FacebookMessageService(this.getHTTPService());
  }
}

export default ServiceProvider;
