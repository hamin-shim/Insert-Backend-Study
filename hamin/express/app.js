import express from "express";
const app = express();

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
  res.statusCode(404);
});
app.use((error, req, res, next) => {
  console.error(error);
  res.statusCode(500);
});

app.listen(8080); //server port=8080
