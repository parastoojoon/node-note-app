import express from "express";
import http from "http";
import cors from "cors";

const app = express();
const port = 8080;

app.use(express.json());
app.use(cors());
import routes from "./routes/notes.route.js";
app.use(routes);

app.get("/", (req, res) => res.json({ message: "Note taking app" }));

const httpServer = http.createServer(app);
httpServer.listen(port);
console.log(`Example backend API listening on port ${port}!`);

export default { app };
