import express from "express";
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(201).send("posts");
});
router.post("/", (req, res, next) => {
  res.sendStatus(201);
});

export default router;
