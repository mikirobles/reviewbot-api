import HTTPService from "../domain/HTTPService";

class FakeHTTPService implements HTTPService {
  async post<B, R>(url: string, body: B) {
    return {} as R;
  }
}

export default FakeHTTPService;
