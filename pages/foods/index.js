import Layout from "@/components/Layout";
import FoodItem from "@/components/FoodItem";
import AuthContext from "@/context/AuthContext";
import { useContext } from "react";

export default function FoodsPage() {
  const { foodItems } = useContext(AuthContext);
  const [foods, setFoods] = foodItems;
  console.log(foods);
  return (
    <Layout>
      <h1>Foods</h1>
      {foods.length === 0 && <h1>No foods</h1>}
      {foods.map((food) => (
        <FoodItem food={food} key={food.id} />
      ))}
    </Layout>
  );
}
