import React, { Dispatch } from "react";
import { Task, TaskAction } from "../reducers/tasksReducer";

interface TasksContextType {
  tasks: Task[];
  dispatch: Dispatch<TaskAction>;
}

const TaskContext = React.createContext<TasksContextType>(
  {} as TasksContextType
);
export default TaskContext;
