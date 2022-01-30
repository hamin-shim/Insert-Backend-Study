import express from "express";
import postRouter from "./router/post.js";
import userRouter from "./router/user.js";
const app = express();

app.use(express.json()); //rest api, body
app.use(express.urlencoded({ extended: false })); //html form -> body
app.use(express.static("public")); //
app.use("/posts", postRouter);
app.use("/users", userRouter);

app.use((req, res, next) => {
  res.sendStatus(404);
});

app.use((error, req, res, next) => {
  console.error(error);
  res.sendStatus(500);
});

app.listen(8080); //server port=8080
