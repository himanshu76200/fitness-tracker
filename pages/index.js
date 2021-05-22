import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
import FoodItem from "@/components/FoodItem";
import Link from "next/link";
import AuthContext from "@/context/AuthContext";
import { useContext } from "react";

export default function Home() {
  const [foods, setFoods] = useContext(AuthContext);
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

// runs at build time
// revalidate foods every 1 second
// export async function getStaticProps() {
//   const res = await fetch(`${API_URL}/api/foods`);
//   const foods = await res.json();
//   return {
//     props: { foods: foods.slice(0, 3) },
//     revalidate: 1,
//   };
// }

// runs every time we make a request
// export async function getServerSideProps() {
//   const res = await fetch(`${API_URL}/api/foods`);
//   const foods = await res.json();
//   return {
//     props: { foods },
//   };
// }
