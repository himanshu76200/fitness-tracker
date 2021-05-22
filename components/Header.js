import styles from "@/styles/Header.module.css";
import Link from "next/link";
import AuthContext from "@/context/AuthContext";
import { useContext } from "react";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";

export default function Header() {
  const { user, logout } = useContext(AuthContext);
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <a>FITNESS TRACKER</a>
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/foods">
              <a>All Food Items</a>
            </Link>
          </li>
          {user ? (
            <>
              <li>
                <Link href="/foods/add">
                  <a>Add food items</a>
                </Link>
              </li>
              <li>
                <button
                  className="btn-secondary btn-icon"
                  onclick={() => {
                    logout();
                  }}
                />
                <FaSignOutAlt /> Logout
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href="/account/login">
                  <a className="btn-secondary btn-icon">
                    <FaSignInAlt />
                    Login
                  </a>
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}
