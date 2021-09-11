const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const server = express();
server.use(helmet());
server.use(express.json());
server.use(cors());

const authRouter = require("./routers/authRouter");

server.use("/api/auth", authRouter);

server.get("/", (req, res) => {
  res.send(`
    <h1>Welcome to the OrderZa API</h1>
    <p> Refer to README for endpoints and data structure </p>
  `);
});

module.exports = server;