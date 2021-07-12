import express from "express";
import ActionProvider from "./ActionProvider";
import ServiceProvider from "./ServiceProvider";

const app = express();
const port = 8080;
app.use(express.json());
const actionProvider = new ActionProvider();
const serviceProvider = new ServiceProvider();

app.post("/askReview", async (req, res) => {
  const { targetId } = req.body;
  // TODO: Validate params
  // TODO: Error handling

  const askForReviewAction = actionProvider.getAskForReview(
    serviceProvider.getMessageService(),
    serviceProvider.getReviewService()
  );

  const message = await askForReviewAction.execute({
    targetId,
  });

  res.send(message);
});

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`ReviewBot started at http://localhost:${port}`);
});
