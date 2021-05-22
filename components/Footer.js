import styles from "@/styles/Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Copyright &copy; Fitness-Tracker 2021</p>
      <p>
        <Link href="/about">
          <a>About FITNESS-TRACKER</a>
        </Link>
      </p>
    </footer>
  );
}
