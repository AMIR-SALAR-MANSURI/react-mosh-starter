import { useReducer } from "react";
import "./App.css";
import Counter from "./state-management/counter/Counter";
import LoginStatus from "./state-management/auth/LoginStatus";
import TaskList from "./state-management/tasks/TaskList";
import NavBar from "./state-management/NavBar";
import HomePage from "./state-management/HomePage";
import TaskContext from "./state-management/tasks/tasksContexts";
import AuthContext from "./state-management/auth/authContext";
import { AuthProvider } from "./state-management/auth";
import { TaskProvider } from "./state-management/tasks";

function App() {
  return (
    <>
      {/* <AuthProvider> */}
      <TaskProvider>
        <Counter />
        <NavBar />
        <HomePage />
      </TaskProvider>
      {/* </AuthProvider> */}
    </>
  );
}

export default App;
