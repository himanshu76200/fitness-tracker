import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
import FoodItem from "@/components/FoodItem";
import Link from "next/link";
import AuthContext from "@/context/AuthContext";
import { useContext } from "react";

export default function Home() {
  const { foodItems } = useContext(AuthContext);
  const [foods, setFoods] = foodItems;
  console.log(foods);
  return (
    <Layout>
      <h1>Foods</h1>
      {foods.length === 0 && <h1>No foods</h1>}
      {foods.slice(0, 3).map((food, index) => (
        <FoodItem food={food} key={food.id} />
      ))}
      {foods.length > 0 && (
        <Link href="/foods">
          <a className="btn-secondary">View All foods</a>
        </Link>
      )}
    </Layout>
  );
}
