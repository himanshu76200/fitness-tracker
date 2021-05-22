import styles from "@/styles/FoodItem.module.css";
import Link from "next/link";
import Image from "next/image";

export default function FoodItem({ food }) {
  return (
    <div className={styles.food}>
      <div className={styles.img}>
        <Image src="/Images/image2.jpg" width={170} height={100} />
      </div>
      <div className={styles.info}>
        {/* <span>
          protein : {food.protein}
          fats: {food.fats}
          carbs: {food.carbs}
        </span> */}
        <h3>{food.name}</h3>
      </div>
      <div className={styles.link}>
        <Link href={`/foods/${food.id}`}>
          <a className="btn">Details</a>
        </Link>
      </div>
    </div>
  );
}
