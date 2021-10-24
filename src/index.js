import express from "express";
import cors from "cors";

const app = express();
const port = 4000;

app.use(express.json());
app.options("*", cors({ origin: true, preflightContinue: true }));
import routes from "./routes/notes.route.js";
app.use(routes);

app.listen(port, () =>
  console.log(`Example backend API listening on port ${port}!`)
);

export default {
  app,
};
