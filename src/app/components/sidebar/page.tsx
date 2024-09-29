import React, { useState, useEffect } from "react";
import styles from "./sidebar.module.scss";

interface Doc {
  docname: string;
}

interface SidebarProps {
  docs: Doc[];
  setActiveDoc: (docname: string) => void;
  activeDoc: string;
}

const Sidebar: React.FC<SidebarProps> = ({ docs, setActiveDoc, activeDoc }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsSidebarOpen(true);
      } else {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call once to set initial state

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!docs || !Array.isArray(docs)) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div 
        className={`${styles.hamburger} ${isSidebarOpen ? styles.active : ''}`} 
        onClick={toggleSidebar}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={`${styles.sidebar} ${isSidebarOpen ? styles.active : ''}`}>
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
                  className={activeDoc === doc.docname ? styles.activeDoc : ''}
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