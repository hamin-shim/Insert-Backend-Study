import express from "express";
const router = express.Router();

router.get("/", (req, res, next) => {
  res.sendStatus(201);
});

export default router;
