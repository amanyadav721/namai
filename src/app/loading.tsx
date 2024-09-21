import styles from "./global.module.scss";

export default function Loader() {
  return (
    <div className={styles.spinner}>
      <div className={styles.spinner1}></div>
    </div>
  );
}
