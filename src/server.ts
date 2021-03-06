import { servest } from "./deps.ts";

import DataRoutes from "./DataRoutes.ts";
import { PORT } from "./config.ts";

const app = servest.createApp();

app.use(async (req) => {
  req.set("Access-Control-Allow-Origin", "*");
  req.set(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
});

app.route("/", DataRoutes());

const port = PORT || 3000;

app.listen({ port });
