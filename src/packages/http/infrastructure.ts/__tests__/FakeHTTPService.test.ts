import FakeHTTPService from "../FakeHTTPService";

describe("FakeHTTPService", () => {
  let service: FakeHTTPService;
  beforeEach(() => {
    service = new FakeHTTPService();
  });
  it("should have a post method that returns an empty object", async () => {
    const response = await service.post("http://fake.url", {});
    expect(response).toEqual({});
  });
  it("should mock facebook POST message calls", async () => {
    const response = await service.post(
      "https://graph.facebook.com/v11.0/me/messages?access_token=FAKE_ACCESS_TOKEN",
      {}
    );
    expect(response).toEqual({
      recipient_id: "1254477777772919",
      message_id:
        "AG5Hz2Uq7tuwNEhXfYYKj8mJEM_QPpz5jdCK48PnKAjSdjfipqxqMvK8ma6AC8fplwlqLP_5cgXIbu7I3rBN0P",
    });
  });
});
