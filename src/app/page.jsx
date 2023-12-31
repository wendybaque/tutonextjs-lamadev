import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>BETTER DESIGN FOR YOUR DIGITAL PRODUCTS</h1>
        <p className={styles.desc}>
          {" "}
          Turning your idea into reality. We bring together the teams from the
          global tech industry.
        </p>
        <Button url="/portfolio" text="See our works" />
      </div>
      <div className={styles.item}>
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
