import Task from "../models/task.model.js";
import { addTaskService } from "../services/task.service.js";

export const addTask = async (req, res) => {
  const { title, description, isDone } = req.body;

  const newTask = new Task({
    title,
    description,
    isDone,
  });

  addTaskService(newTask, res);
};

export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    console.log("[!]", err.message);
    res.status(500).json({ message: "Error at get tasks" });
  }
};

export const getTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(400).json({ message: "Task not found" });

    res.json({
      title: task.title,
      description: task.description,
      isDone: task.isDone,
      createdAt: task.createdAt,
    });
  } catch (err) {
    console.log("[!]", err.message);
    res.status(500).json({ message: "Error at get task" });
  }
};

export const editTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!task) return res.status(400).json({ message: "Task not found" });
    res.json({
      title: task.title,
      description: task.description,
      isDone: task.isDone,
      createdAt: task.createdAt,
    });
  } catch (err) {
    console.log("[!]", err.message);
    res.status(500).json({ message: "Error at edit task" });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) return res.status(400).json({ message: "Task not found" });
  } catch (err) {
    console.log("[!]", err.message);
    res.status(500).json({ message: "Error at delete task" });
  }
};
