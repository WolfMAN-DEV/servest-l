import { servest } from "./deps.ts";

import DataST from "./DataST.ts";
import { PORT } from "./config.ts";

const app = servest.createApp();

app.handle("/", async (req) => {
  await req.respond({
    status: 200,
    headers: new Headers({
      "content-type": "application/json",
    }),
    body: JSON.stringify({
      status: "success",
      data: DataST.getInstance().getSimpleData(),
    }),
  });
});

const port = PORT || 3000;

app.listen({ port });
