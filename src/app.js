import express from "express";
import morgan from "morgan";

import taskRoutes from "./routes/task.routes.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use("/api/", taskRoutes);

export default app;
