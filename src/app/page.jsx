import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <div className={styles.texts}></div>
      <div className={styles.imgContainer}>
        {" "}
        <Image
          className={styles.img}
          src="/hero.png"
          alt="hero"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}
