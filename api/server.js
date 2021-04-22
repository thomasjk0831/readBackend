const express = require("express");
const server = express();
const cors = require("cors");

const authRouter = require("../auth/auth-router");
const userRouter = require("../users/users-router");
const postRouter = require("../posts/posts-router");
const commentRouter = require("../comments/comments-router");
const subRouter = require("../subreadits/subreadits-router");

server.use(express.json());
server.use(cors());

server.get("/", (req, res) => {
  res.json({ msg: "readit api is up" });
});

server.use("/api/auth", authRouter);
server.use("/api/user", userRouter);
server.use("/api/post", postRouter);
server.use("/api/comment", commentRouter);
server.use("/r", subRouter);

module.exports = server;
