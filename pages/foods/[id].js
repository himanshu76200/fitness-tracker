import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
import styles from "@/styles/Food.module.css";
import Link from "next/link";
import Image from "next/image";
import { FaPencilAlt, FaTimes, FaBackward } from "react-icons/fa";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useRouter } from "next/router";

export default function FoodPage({ food }) {
  const router = useRouter();

  const deleteFood = async (e) => {
    // e.preventDefault();
    console.log(food);
    // if (confirm("Are you sure?")) {
    //   const res = await fetch(`${API_URL}/api/events/${event.id}`, {
    //     method: "DELETE",
    //   });
    //   const data = await res.json();
    //   if (!res.ok) {
    //     toast.error(data.message);
    //   } else {
    //     router.push("/events");
    //   }
    // }
  };
  return (
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
        <span>{/* {event.date} at {event.time} */}</span>
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
        <Link href="/events">
          <a className={styles.back}>
            <FaBackward /> GO BACK
          </a>
        </Link>
      </div>
    </Layout>
  );
}

//using getStaticProps and getStaticPaths

export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/api/foods`);
  const foods = await res.json();

  const paths = foods.map((food) => ({
    params: { id: food.id },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params: { id } }) {
  const res = await fetch(`${API_URL}/api/foods/${id}`);
  const foods = await res.json();
  console.log(foods);
  return {
    props: { food: foods[0] },
    revalidate: 1,
  };
}
