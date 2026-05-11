import Image from "next/image";
import { motion } from "framer-motion";
import c2 from "@/assets/hero/sl3.jpeg";
import c4 from "@/assets/hero/sl5.jpeg";
import c3 from "@/assets/hero/sl2.jpg";
import c1 from "@/assets/hero/sl1.jpg";
import Button from "../button/Button";
import { useEffect, useState } from "react";
import styles from "@/styles/Home.module.css";
import EastIcon from "@mui/icons-material/East";
import MainHeading from "../heading/MainHeading";
import { container, item } from "@/utils/animation";

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
          fill
          key={i}
          src={img}
          alt="hero"
          quality={100}
          sizes="100vw"
          priority={i === 0}
          className={`${styles.hero_bg} ${i === index ? styles.hero_active : ""}`}
        />
      ))}

      <div className={styles.hero_overlay} />

      <motion.div
        animate="show"
        initial="hidden"
        variants={container}
        className={styles.hero_container}
      >
        <div className={styles.hero_left}>

          <motion.div variants={item}>
            <MainHeading text="Engineering the Future of  {{Infrastructure}}" />
          </motion.div>

          <motion.p variants={item} className={styles.h_pra}>
            We build scalable, high-quality infrastructure solutions with
            innovation, precision, and long-term impact.
          </motion.p>

          <motion.div variants={item} className={styles.hero_btn}>
            <Button
              text="Explore Service"
              action={buttonClicked}
              endIcon={<EastIcon />}
            />
            <Button text="View Project" action={buttonClicked} />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
