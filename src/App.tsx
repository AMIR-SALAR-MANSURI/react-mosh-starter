import { useReducer } from "react";
import "./App.css";
import Counter from "./state-management/Counter";
import LoginStatus from "./state-management/LoginStatus";
import TaskList from "./state-management/tasks/TaskList";
import NavBar from "./state-management/NavBar";
import HomePage from "./state-management/HomePage";
import TaskContext from "./state-management/tasks/tasksContexts";
import loginStatusReducer from "./state-management/reducers/loginStatusReducer";
import AuthContext from "./state-management/context/authContext";
import AuthProvider from "./state-management/AuthProvider";
import { TaskProvider } from "./state-management/tasks";

function App() {
  return (
    <>
      <AuthProvider>
        <TaskProvider>
          <NavBar />
          <HomePage />
        </TaskProvider>
      </AuthProvider>
    </>
  );
}

export default App;
