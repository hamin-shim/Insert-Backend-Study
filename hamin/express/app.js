import express from "express";
import fs from "fs";
import fsAsync from "fs/promises";
const app = express();

app.get("/file1", (req, res) => {
  // try {
  //   const data = fs.readFileSync("/file.txt");
  // } catch (error) {
  //   res.status(404).send("File not found");
  // }
  // 동기 => try catch로 잡거나 어쨌든 안해도 안전망에 체크됨.
  fs.readFile("/file1.txt", (err, data) => {
    if (err) {
      res.status(404).send("File not found");
    }
  });
  // 비동기 => 내부적 에러이므로 안전망에 걸리지 않음. 콜백함수 내에서 문제가 생기기 때문
});
app.get("/file2", (req, res) => {
  fsAsync
    .readFile("/file.txt")
    .then((data) => {})
    .catch((error) => {});
  //내부에서 에러 캐치하므로 외부적으로 알 수 없음! 비동기는 아무리 try catch로 해도 안됨. 내부 catch 구조로 하는 수 밖에 없음.
});

app.get("/:id", (req, res, next) => {
  console.log("get");
  console.log(req.params);
  console.log(req.headers);
  console.log(req.query);
  next();
  res.send("Hello");
  //   res.json({ name: "Ellie" });
  //   res.status(404).send("wrong");
});

app.get("/:id", (req, res, next) => {
  res.send("Hi");
});
app.use(express.json()); //이렇게 하면 postman으로 보낸 body 읽을 수 있게 됨.
app.post("/:id", (req, res, next) => {
  console.log(req.body);
});

app.use((req, res, next) => {
  res.sendStatus(404);
});
app.use((error, req, res, next) => {
  console.error(error);
  res.sendStatus(500);
});

app.listen(8080); //server port=8080
