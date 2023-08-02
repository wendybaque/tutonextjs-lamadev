import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>©2023 - Made with ❤ by <Link href="http://www.wendev.fr"alt="Redirect to WenDev website">Wendy Baqué</Link></div>
      <div className={styles.social}>
          <Link href="https://linktr.ee/wendev" alt="Facebook redirect"><Image src="/1.png" width={15} height={15} alt="Facebook" className={styles.icon}/></Link>
          <Link href="https://linktr.ee/wendev" alt="Instagram redirect"><Image src="/2.png" width={15} height={15} alt="Instagram" className={styles.icon}/></Link>
          <Link href="https://linktr.ee/wendev" alt="Twitter redirect"><Image src="/3.png" width={15} height={15} alt="Twitter" className={styles.icon}/></Link>
          <Link href="https://linktr.ee/wendev" alt="Youtube redirect"><Image src="/4.png" width={15} height={15} alt="Youtube" className={styles.icon}/></Link>
      </div>
    </div>
  );
};

export default Footer;
