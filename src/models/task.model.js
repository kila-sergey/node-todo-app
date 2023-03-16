import mongoose from "mongoose";
import { TASK_MODEL_NAME } from "../constants/models.constants";
import { taskSchema } from "../schemas/task.schema";

export const Task = mongoose.model(TASK_MODEL_NAME, taskSchema);
