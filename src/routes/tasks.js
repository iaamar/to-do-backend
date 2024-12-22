import express from "express";
import prisma from "../lib/db.js";

const tasksRouter = express.Router();

// Get all tasks
tasksRouter.get("/", async (req, res) => {
  try {
    const tasks = await prisma.task.findMany({
      orderBy: { createdAt: "asc" },
    });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch tasks" });
  }
});

// Get a task by ID
tasksRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const task = await prisma.task.findUnique({ where: { id } });
    if (!task) return res.status(404).json({ error: "Task not found" });
    res.json(task);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch task" });
  }
});

// Create a new task
tasksRouter.post("/", async (req, res) => {
  const { title, color } = req.body;
  try {
    const newTask = await prisma.task.create({
      data: { title, color },
    }); 
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ error: "Failed to create task" });
  }
});

// Update a task by ID
tasksRouter.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { title, color, completed } = req.body;
  try {
    const updatedTask = await prisma.task.update({
      where: { id },
      data: { title, color, completed },
    });
    res.json(updatedTask);
  } catch (error) {
    res.status(500).json({ error: "Failed to update task" });
  }
});

// Delete a task by ID
tasksRouter.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.task.delete({ where: { id } });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Failed to delete task" });
  }
});

export default tasksRouter;
