import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
// import { API_URL } from "@/config/index";
import styles from "@/styles/Form.module.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Layout from "@/components/Layout";
import AuthContext from "@/context/AuthContext";
import { useContext } from "react";

export default function AddFoodPage() {
  const { foodItems } = useContext(AuthContext);
  const [foods, setFoods] = foodItems;

  const [values, setValue] = useState({
    id: "",
    name: "",
    protein: "",
    carbs: "",
    fat: "",
  });
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const hasEmptyFeild = Object.values(values).some(
      (element) => element === ""
    );

    if (hasEmptyFeild) {
      toast.error("Please Fill all feilds");
    }

    const newFood = {
      id: values.id,
      name: values.name,
      protein: values.protein,
      carbs: values.carbs,
      fat: values.fat,
    };

    setFoods([...foods, newFood]);

    router.push(`/foods/${newFood.id}`);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValue({ ...values, [name]: value });
  };

  return (
    <Layout title="Add Food">
      <Link href="/foods">Go Back</Link>
      <h1>Add Food</h1>
      <ToastContainer />
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.grid}>
          <div>
            <label htmlFor="id">Food ID</label>
            <input
              type="number"
              id="id"
              name="id"
              value={values.id}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="name">Food Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={values.name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="protein">Protein</label>
            <input
              type="number"
              name="protein"
              id="protein"
              value={values.protein}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="carbs">Carbs</label>
            <input
              type="number"
              name="carbs"
              id="carbs"
              value={values.carbs}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="fat">Fat</label>
            <input
              type="number"
              name="fat"
              id="fat"
              value={values.fat}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <input type="submit" value="Add Food" className="btn" />
      </form>
    </Layout>
  );
}
