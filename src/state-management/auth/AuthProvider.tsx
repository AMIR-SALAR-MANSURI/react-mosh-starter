import { ReactNode, useReducer } from "react";
import AuthContext from "./authContext";
interface LoginAction {
  type: "LOGIN";
  usename: string;
}
interface LogoutAction {
  type: "LOGOUT";
}
export type AuthAction = LoginAction | LogoutAction;
const loginStatusReducer = (state: string, action: AuthAction): string => {
  if (action.type === "LOGIN") return action.usename;
  if (action.type === "LOGOUT") return "";
  return state;
};

interface Props {
  children: ReactNode;
}
const AuthProvider = ({ children }: Props) => {
  const [user, dispatch] = useReducer(loginStatusReducer, "");

  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
