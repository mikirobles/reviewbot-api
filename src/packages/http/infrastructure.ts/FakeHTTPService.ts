import HTTPService from "../domain/HTTPService";

class FakeHTTPService implements HTTPService {
  async post<B, R>(url: string, body: B) {
    if (url.includes("https://graph.facebook.com/v11.0/me/messages")) {
      return {
        recipient_id: "1254477777772919",
        message_id:
          "AG5Hz2Uq7tuwNEhXfYYKj8mJEM_QPpz5jdCK48PnKAjSdjfipqxqMvK8ma6AC8fplwlqLP_5cgXIbu7I3rBN0P",
      } as unknown as R;
    }
    return {} as R;
  }
}

export default FakeHTTPService;
