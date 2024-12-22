import express from "express";
import prisma from "../lib/db.js";

const router = express.Router();

router.get("/healthz", async (req, res) => {
  try {
    await prisma.$executeRaw`SELECT 1`; // Basic DB check
    res.json({ status: "OK", database: "connected" });
  } catch (error) {
    res
      .status(500)
      .json({
        status: "FAIL",
        database: "not connected",
        error: error.message,
      });
  }
});

export default router;
