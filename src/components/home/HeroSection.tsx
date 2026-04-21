import Image from "next/image";
import c1 from "@/assets/hero/c1.jpg";
import c2 from "@/assets/hero/c2.jpg";
import c3 from "@/assets/hero/c3.jpg";
import c4 from "@/assets/hero/c4.jpg";
import Button from "../button/Button";
import { useEffect, useState } from "react";
import styles from "@/styles/Home.module.css";
import EastIcon from "@mui/icons-material/East";
import MainHeading from "../heading/MainHeading";


const images = [c1, c2, c3, c4];

const Hero = () => {
  const [index, setIndex] = useState(0);

  const buttonClicked = () => {
    console.log("button clicked");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.hero}>
      {images.map((img, i) => (
        <Image
          key={i}
          src={img}
          alt="hero"
          fill
          priority={i === 0}
          quality={100}
          sizes="100vw" 
          className={`${styles.hero_bg} ${i === index ? styles.hero_active : ""}`}
        />
      ))}

      <div className={styles.hero_overlay} />

      <div className={styles.hero_container}>
        <div className={styles.hero_left}>
          <p className={styles.h_badge}>Trusted Since 1999</p>
          <MainHeading text="Engineering the Future of  {{Infrastructure}}" />
          <p className={styles.h_pra}>
            We build scalable, high-quality infrastructure solutions with
            innovation, precision, and long-term impact.
          </p>
          <div className={styles.hero_btn}>
            <Button
              text="Explore Service"
              action={buttonClicked}
              endIcon={<EastIcon />}
            />
            <Button
              text="View Project"
              action={buttonClicked}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
