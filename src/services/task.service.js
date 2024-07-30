export const addTaskService = async (newTask, res) => {
  try {
    const { id, title, description, isDone, createdAt } = await newTask.save();
    res.json({
      id,
      title,
      description,
      isDone,
      createdAt,
    });
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
    console.log("[!]", err.message);
  }
};
