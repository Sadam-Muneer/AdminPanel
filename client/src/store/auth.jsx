import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const AuthContext = createContext();

export const AuthProvide = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");
  const [services, setServices] = useState([]);
  const authorizationToken = `Bearer ${token}`;

  const storeInLocalStorage = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
  };

  let isLoggedIn = !!token;

  const LogoutUser = () => {
    if (!token) return; // Return if already logged out
    setToken("");
    localStorage.removeItem("token");
    setUser("");
    toast.success("Logged out successfully");
  };
  const userAuthentication = async (token) => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/user", {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log("user data", data.userData);
        setUser(data.userData);
      }
    } catch (error) {
      console.log(`Error fetching user data is : ${error}`);
    }
  };
  // to fetch the services data from backedn/ database
  const getServices = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/data/service", {
        method: "GET",
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data.msg);
        setServices(data.msg);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getServices();
    userAuthentication(token);
  }, [token]);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        storeInLocalStorage,
        LogoutUser,
        user,
        services,
        authorizationToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const AuthContextValue = useContext(AuthContext);
  if (!AuthContextValue) {
    throw new Error("useAuth used outside of the provider");
  }
  return AuthContextValue;
};
