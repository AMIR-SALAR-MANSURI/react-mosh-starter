import React, { ReactNode, useReducer } from "react";
import TaskContext from "./context/tasksContexts";
import taskReducer from "./reducers/tasksReducer";
interface Props {
  children: ReactNode;
}
const TaskProvider = ({ children }: Props) => {
  const [tasks, dispatch] = useReducer(taskReducer, []);

  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;