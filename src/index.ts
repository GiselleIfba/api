import express from "express";
import { router } from "./router";
import "dotenv/config";

const server = express();
server.use(express.json());
server.use(router);

const port = process.env.PORT;

server.listen(port || 3333, async () => {
  console.log("server running");
});
