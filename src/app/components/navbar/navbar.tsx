"use client"
import { useState } from "react";
import Link from "next/link";
import styles from "./navbar.module.scss";

const NavBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navbarLeft}>
          <span className={styles.companyName}>नमः Ai</span>
        </div>
        <button className={styles.hamburger} onClick={toggleSidebar}>
          &#9776; {/* Hamburger Icon */}
        </button>
        <div className={`${styles.navbarCenter} ${isSidebarOpen ? styles.active : ""}`}>
          <ul className={styles.navLinks}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/ai_library">Ai library</Link>
            </li>
            <li>
              <Link href="/pages/Api">Api</Link>
            </li>
            <li>
              <Link href="/pages/Doc">Doc</Link>
            </li>
            <li>
              <Link href="/pages/Contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Overlay for sidebar when active */}
      {isSidebarOpen && <div className={styles.overlay} onClick={toggleSidebar}></div>}
    </>
  );
};

export default NavBar;
