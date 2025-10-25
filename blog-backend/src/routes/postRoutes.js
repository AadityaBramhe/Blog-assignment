// src/routes/postRoutes.js
import express from "express";
const router = express.Router();

// Example routes
router.get("/", (req, res) => {
  res.send("Posts route working!");
});

router.post("/", (req, res) => {
  res.send("Create a post!");
});

export default router;
