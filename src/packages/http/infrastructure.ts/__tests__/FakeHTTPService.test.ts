import FakeHTTPService from "../FakeHTTPService";

describe("FakeHTTPService", () => {
  let service: FakeHTTPService;
  it("should have a post method that returns an empty object", async () => {
    service = new FakeHTTPService();
    const response = await service.post("http://fake.url", {});
    expect(response).toEqual({});
  });
});
