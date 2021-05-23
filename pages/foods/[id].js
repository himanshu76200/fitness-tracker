import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
import styles from "@/styles/Food.module.css";
import Link from "next/link";
import Image from "next/image";
import { FaPencilAlt, FaTimes, FaBackward } from "react-icons/fa";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useRouter } from "next/router";
import AuthContext from "@/context/AuthContext";
import { useContext, useEffect, useState } from "react";

export default function FoodPage() {
  const router = useRouter();
  const { foodItems } = useContext(AuthContext);
  const [foods, setFoods] = foodItems;
  const [food, setFood] = useState(null);
  const [calories, setCalories] = useState(null);
  const id = router.query.id;

  useEffect(() => {
    foods.map((food) => {
      if (food.id === id) {
        setFood(food);
        setCalories(
          parseInt(food.protein) + parseInt(food.carbs) + parseInt(food.fat)
        );
      }
    });
  }, [id]);

  const deleteFood = (e) => {
    e.preventDefault();
    if (confirm("Are you sure you want to delete this?")) {
      const index = foods.indexOf(food);
      setFood(foods.splice(index, 1));
      router.push("/foods");
    }
  };
  return (
    <>
      {food ? (
        <Layout>
          <div className={styles.food}>
            <div className={styles.controls}>
              <Link href={`/foods/${food.id}`}>
                <a>
                  <FaPencilAlt /> Edit Food
                </a>
              </Link>
              <a href="#" className={styles.delete} onClick={deleteFood}>
                <FaTimes /> Delete Food
              </a>
            </div>
            <span></span>
            <h1>{food.name}</h1>
            <ToastContainer />

            <div className={styles.image}>
              <Image src="/Images/image2.jpg" width={960} height={600} />
            </div>

            <h3>Protein:</h3>
            <p>{food.protein}</p>
            <h3>Carbs:</h3>
            <p>{food.carbs}</p>
            <h3>Fats:</h3>
            <p>{food.fat}</p>
            <h3>Total Calories:</h3>
            <p>{calories}</p>
            <Link href="/foods">
              <a className={styles.back}>
                <FaBackward /> GO BACK
              </a>
            </Link>
          </div>
        </Layout>
      ) : null}
    </>
  );
}

//using getStaticProps and getStaticPaths

// export async function getStaticPaths() {
//   const res = await fetch(`${API_URL}/api/foods`);
//   const foods = await res.json();

//   const paths = foods.map((food) => ({
//     params: { id: food.id },
//   }));

//   return {
//     paths,
//     fallback: true,
//   };
// }

// export async function getStaticProps({ params: { id } }) {
//   const res = await fetch(`${API_URL}/api/foods/${id}`);
//   const foods = await res.json();
//   console.log(foods);
//   return {
//     props: { food: foods[0] },
//     revalidate: 1,
//   };
// }
