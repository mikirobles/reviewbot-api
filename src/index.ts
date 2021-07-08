import express from "express";
import ActionProvider from "./ActionProvider";
import ServiceProvider from "./ServiceProvider";
const app = express();
const port = 8080;

app.post("/askReview", async (req, res) => {
  const actionProvider = new ActionProvider();
  const serviceProvider = new ServiceProvider();

  const { targetId } = req.body;

  const sendMessageAction = actionProvider.getSendMessage(
    serviceProvider.getMessageService()
  );
  const template = `Hi, please let us know what you think of the product you received from us!`;

  const message = await sendMessageAction.execute({
    targetId,
    message: template,
  });

  res.send(message);
});

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`ReviewBot started at http://localhost:${port}`);
});
