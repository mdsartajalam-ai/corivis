"use client";

import styles from "@/styles/Home.module.css";
import Image from "next/image";
import logo from "@/assets/logo/image (1).webp";

export default function PremiumStatement() {
  return (
    <section className={styles.section_wrapper}>
      <div className={styles.container}>

        {/* Left Accent */}
        <div className={styles.side_line}></div>

        <div className={styles.content}>

          <span className={styles.badge}>OUR JOURNEY</span>

          <h2 className={styles.title}>
            Building{" "}
            <span>Infrastructure</span> That Shapes{" "}
            <span>The Future</span>
          </h2>

          <p className={styles.text}>
            From a small construction firm to a diversified infrastructure
            group, our growth has been driven by precision, innovation,
            and an uncompromising commitment to excellence.
          </p>

          <p className={styles.text}>
            We don’t just deliver projects — we create long-term value,
            empower communities, and build a stronger, future-ready India.
          </p>

          {/* Author */}
          <div className={styles.author}>
            <Image src={logo} alt="logo" width={50} height={50} />
            <div>
              <h4>Banty Kumar</h4>
              <span>Managing Director</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
