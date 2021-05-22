import { useState, useEffect, createContext } from "react";

const FoodContext = createContext();

export const FoodProvider = ({ children }) => {
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
    <FoodContext.Provider value={[foods, setFoods]}>
      <children />
    </FoodContext.Provider>
  );
};

export default FoodContext;
