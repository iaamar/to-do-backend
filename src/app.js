import express from "express";
import cors from "cors";
import tasksRouter from "./routes/tasks.js";
const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());
app.use("/api/tasks", tasksRouter);
app.get("/healthz", (req, res) => {
  res.json({ status: "OK" });
});
export default app;
