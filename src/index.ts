import express from "express";
import ActionProvider from "./ActionProvider";
import { FacebookWebhookPayload } from "./packages/chat/infrastructure/entities/FacebookWebhookPayload";
import ServiceProvider from "./ServiceProvider";

const app = express();
const port = 8080;
app.use(express.json());
const actionProvider = new ActionProvider();
const serviceProvider = new ServiceProvider();

// 1. Verify bot
app.get("/webhook", function (req, res) {
  if (
    req.query["hub.verify_token"] === process.env.FACEBOOK_VERIFICATION_TOKEN
  ) {
    res.status(200).send(req.query["hub.challenge"]);
  } else {
    console.error("Verification failed, tokens do not match.");
    res.sendStatus(403);
  }
});

// 2. Ask for reviews
app.post("/askReview", async (req, res) => {
  // TODO: Proper body validation & error handling
  const { targetId } = req.body;

  const askForReviewAction = actionProvider.getAskForReview(
    serviceProvider.getMessageService(),
    serviceProvider.getReviewService()
  );

  const message = await askForReviewAction.execute({
    targetId,
  });

  res.status(200).send(message);
});

// 3. Receive and reviews
app.post("/webhook", async (req, res) => {
  // TODO: Proper body validation & error handling
  if (req.body.object == "page") {
    const facebookWebhookPayload = req.body as FacebookWebhookPayload;
    // TODO: Maybe we should iterate the entries in case we get multiple messages at once
    const event = facebookWebhookPayload.entry[0].messaging[0];
    if (event.message) {
      const saveReviewAction = actionProvider.getSaveReview(
        serviceProvider.getReviewService()
      );

      saveReviewAction.execute({
        targetId: event.sender.id,
        reviewMessage: event.message.text,
      });
    }
  }
  res.sendStatus(200);
});

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`ReviewBot started at http://localhost:${port}`);
});
