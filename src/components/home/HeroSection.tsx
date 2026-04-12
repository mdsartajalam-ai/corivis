// import styles from "@/styles/Home.module.css";
// import Button from "../button/Button";
// import MainHeading from "../heading/MainHeading";
// import SubHeading from "../heading/SubHeading";

// const HeroSection = () => {
//   const buttonClicked = () => {
//     console.log("Button clicked!");
//   };
//   return (
//     <div className={styles.container}>
//       <h1>this is home page</h1>
//       <Button text="Click me" action={buttonClicked} />
//       <MainHeading text="this is main heading "/>
//       <SubHeading text="this is sub heading"/>
//     </div>
//   );
// };

// export default HeroSection;
"use client";

import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";
import Image from "next/image";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import c1 from "@/assets/hero/c1.jpg";
import c2 from "@/assets/hero/c2.jpg";
import c3 from "@/assets/hero/c3.jpg";

const images = [c1, c2, c3];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.hero}>
      
      {/* BACKGROUND IMAGE */}
      {images.map((img, i) => (
        <Image
          key={i}
          src={img}
          alt="hero"
          fill
          priority={i === 0}
          className={`${styles.bg} ${i === index ? styles.active : ""}`}
        />
      ))}

      {/* OVERLAY */}
      <div className={styles.overlay} />

      {/* CONTENT */}
      <div className={styles.container}>
        
        <div className={styles.left}>
          
          <span className={styles.badge}>
            Trusted Since 1999
          </span>

          <h1 className={styles.heading}>
            Engineering the Future of <br />
            <span>Infrastructure</span>
          </h1>

          <p className={styles.sub}>
            We build scalable, high-quality infrastructure solutions with 
            innovation, precision, and long-term impact.
          </p>

          <div className={styles.actions}>
            <button className="app-button">
              Explore Services <ArrowForwardIcon />
            </button>

            <button className={styles.secondary}>
              View Projects
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
