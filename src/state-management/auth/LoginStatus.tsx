import { useContext } from "react";
import AuthContext from "./authContext";
import useAuth from "./useAuth";
import userAuthStore from "./store";

const LoginStatus = () => {
  // const [user, setUser] = useState('');

  // const { user, dispatch } = useAuth();
  const { Login, Logout, user } = userAuthStore();
  if (user)
    return (
      <>
        <div>
          <span className="mx-2">{user}</span>
          <a onClick={() => Logout()} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a onClick={() => Login("mosh.hamedani")} href="#">
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
