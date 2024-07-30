import { Router } from "express";
import {
  addTask,
  deleteTask,
  editTask,
  getTask,
  getTasks,
} from "../controllers/task.controller.js";

const router = Router();

router.delete("/task/:id", deleteTask);
router.get("/task", getTasks);
router.get("/task/:id", getTask);
router.post("/task", addTask);
router.put("/task/:id", editTask);

export default router;
