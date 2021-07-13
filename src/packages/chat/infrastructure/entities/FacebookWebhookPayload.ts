interface Messaging {
  sender: {
    id: string;
  };
  recipient: {
    id: string;
  };
  message: {
    text: string;
  };
}

interface Event {
  id: string;
  time: number;
  messaging: [Messaging];
}

export interface FacebookWebhookPayload {
  object: string;
  entry: Event[];
}
