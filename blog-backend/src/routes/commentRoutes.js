import express from "express";
const router = express.Router();

// Example route
router.get("/", (req, res) => {
  res.send("Comments route working!");
});

// Named export
export { router as commentRoutes };
