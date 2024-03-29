import axios from "axios";
import { useState, useEffect, useContext, createContext } from "react";

const AuthContext = createContext();

// const [auth, setAuth] = useState({
//     user:null,
//     token: ""
// })

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: "",
  });
  axios.defaults.headers.common["Authorization"] = auth?.token;
  useEffect(() => {
    const data = localStorage.getItem("auth");
    if (data) {
      const parseData = JSON.parse(data);
      setAuth({
        ...auth,
        user: parseData.loginUser,
        token: parseData.token,
      });
    }
    //eslint-disable-next-line
  }, []);
  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};

//custon hook
const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
