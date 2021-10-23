import express from "express";

const app = express();
const port = 4000;

app.use(express.text());
import routes from "./routes/notes.route.js";
app.use(routes);

app.listen(port, () =>
  console.log(`Example backend API listening on port ${port}!`)
);
