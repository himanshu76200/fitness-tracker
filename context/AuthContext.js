import { createContext, useContext, useState } from "react";
import { useRouter } from "next/router";
import { API_URL } from "@/config/index";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [allUsers, setAllUsers] = useState([
    {
      email: "test@test.com",
      password: "password",
    },
  ]);
  //Register user
  const register = async ({ email, password }) => {
    setAllUsers((prevUsers) => {
      [...prevUsers, { email: email, password: password }];
    });
    login(email, password);
    {
      checkUserLoggedIn ? router.push("/foods") : null;
    }
  };
  //Login user
  const login = async ({ email, password }) => {
    allUsers.map((currentUser) => {
      if (currentUser.email === email) {
        if (currentUser.password === password) {
          setUser(currentUser);
          {
            checkUserLoggedIn ? router.push("/foods") : null;
          }
        } else {
          setError("Incorrent Password");
          return;
        }
      }
    });
  };
  //Logout user
  const logout = async () => {
    setUser(null);
    router.push("/foods");
  };
  //check if user is logged in
  const checkUserLoggedIn = async () => {
    {
      user ? true : false;
    }
  };

  const [foods, setFoods] = useState([
    {
      id: "1",
      name: "Chicken Biryani",
      protein: "250",
      carbs: "130",
      fat: "200",
    },
    {
      id: "2",
      name: "Butter Chicken",
      protein: "250",
      carbs: "130",
      fat: "200",
    },
    {
      id: "3",
      name: "Shahi Panner",
      protein: "250",
      carbs: "130",
      fat: "200",
    },
    {
      id: "4",
      name: "Salad",
      protein: "250",
      carbs: "130",
      fat: "200",
    },
    {
      id: "5",
      name: "Fish Curry",
      protein: "250",
      carbs: "130",
      fat: "200",
    },
  ]);

  return (
    <AuthContext.Provider
      value={({ user, error, register, login, logout }, [foods, setFoods])}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
