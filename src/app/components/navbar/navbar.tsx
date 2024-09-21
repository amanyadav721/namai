// components/NavBar.js
import Link from "next/link";
import styles from "./navbar.module.scss";


const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLeft}>
        <span className={styles.companyName}>नमः Ai</span>
      </div>
      <div className={styles.navbarCenter}>
        <ul className={styles.navLinks}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="../../ai_library">Ai library</Link>
          </li>

          <li>
            <Link href="../../pages/Api">Api</Link>
          </li>
          <li>
            <Link href="../../pages/Doc">Doc</Link>
          </li>
          <li>
            <Link href="../../pages/Contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
