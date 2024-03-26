import { useContext } from "react";
import AuthContext from "../context/authContext";
import TaskContext from "../context/tasksContexts";

const useTask = () => useContext(TaskContext);
export default useTask;
