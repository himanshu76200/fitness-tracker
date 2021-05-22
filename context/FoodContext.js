import { useState, useEffect, createContext } from "react";

const FoodContext = useContext();

export const FoodProvider = ({ children }) => {
  const [foods, setFoods] = useState();
};

export default FoodContext;
