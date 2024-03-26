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
export default loginStatusReducer;
