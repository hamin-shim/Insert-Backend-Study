import express from "express";
import fs from "fs";
import fsAsync from "fs/promises";
const app = express();

app
  .route("/posts")
  .get((req, res, next) => {
    res.status(201).send("Get: /posts");
  })
  .post((req, res, next) => {
    res.status(201).send("Post: /posts");
  }); //이렇게 하면 여러번 안쓰고 하나의 chain에 연결할 수 있음.
app.use((req, res, next) => {
  res.sendStatus(404);
});
app.use((error, req, res, next) => {
  console.error(error);
  res.sendStatus(500);
});

app.listen(8080); //server port=8080
