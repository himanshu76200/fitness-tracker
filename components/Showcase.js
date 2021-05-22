import styles from "@/styles/Showcase.module.css";

export default function Showcase() {
  return (
    <div className={styles.showcase}>
      <h1>Get calories, fat, carbs, protein for your food.</h1>
      <h2>
        {" "}
        Then add them to your Daily Totals to see how your calories add up!
      </h2>
    </div>
  );
}
