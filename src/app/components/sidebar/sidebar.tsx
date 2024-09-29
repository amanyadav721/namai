"use client"; // Required for client components in Next.js

import React, { useState, useEffect } from "react";
import styles from "./sidebar.module.scss";

interface Doc {
  docname: string;
  component: React.ComponentType;
}

interface SidebarProps {
  docs: Doc[];
  setActiveDoc: (docname: string) => void;
  activeDoc: string;
}

// Add PageProps to SidebarProps if needed
// interface SidebarProps extends PageProps {
//   docs: Doc[];
//   setActiveDoc: (docname: string) => void;
//   activeDoc: string;
// }

const Sidebar: React.FC<SidebarProps> = ({ docs, setActiveDoc, activeDoc }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSidebarOpen(window.innerWidth > 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!docs || !Array.isArray(docs)) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div
        className={`${styles.hamburger} ${isSidebarOpen ? styles.active : ""}`}
        onClick={toggleSidebar}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={`${styles.sidebar} ${isSidebarOpen ? styles.active : ""}`}>
        <ul className={styles.docList}>
          {docs.map((doc, index) => (
            <li key={index} className={styles.docItem}>
              <div className={styles.docBlock}>
                <button
                  onClick={() => {
                    setActiveDoc(doc.docname);
                    if (window.innerWidth <= 768) {
                      setIsSidebarOpen(false);
                    }
                  }}
                  className={activeDoc === doc.docname ? styles.activeDoc : ""}
                >
                  {doc.docname}
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
