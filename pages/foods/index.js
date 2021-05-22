import Layout from "@/components/Layout";
// import { API_URL } from "@/config/index";
import FoodItem from "@/components/FoodItem";
import AuthContext from "@/context/AuthContext";
import { useContext } from "react";

export default function FoodsPage() {
  const [foods, setFoods] = useContext(AuthContext);
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

// runs at build time
// revalidate foods every 1 second
// export async function getStaticProps() {
//   const res = await fetch(`${API_URL}/api/foods`);
//   const foods = await res.json();
//   return {
//     props: { foods },
//     revalidate: 1,
//   };
// }
