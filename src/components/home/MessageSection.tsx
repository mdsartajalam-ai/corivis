import Image from "next/image";
import { motion } from "framer-motion";
import styles from "@/styles/Home.module.css";
import directorImg from "@/assets/hero/Director.webp";
import MainHeading from "../heading/MainHeading";

const MessageSection = () => {
  return (
    <div className={styles.md_container}>
      <motion.div
        viewport={{ once: true }}
        className={styles.md_image}
        transition={{ duration: 0.6 }}
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
      >
        <Image
          priority
          width={450}
          height={550}
          src={directorImg}
          alt="Managing Director"
        />
      </motion.div>

      <motion.div
        viewport={{ once: true }}
        className={styles.md_content}
        transition={{ duration: 0.6 }}
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
      >
        <span className={styles.md_badge}>MANAGING DIRECTOR MESSAGE</span>

        <MainHeading text="A Vision for {{Growth & Excellence}}" />

        <p>
          At Eceladdus Enllave Group, we believe every project is more than
          business—it is a commitment to creating lasting value for our clients,
          communities, and future generations.
        </p>

        <p>
          Through innovation, integrity, and a customer-first approach, we
          continue to expand our presence across infrastructure, technology,
          manpower services, solar energy, and real estate development.
        </p>

        <p>
          Our mission is simple: deliver quality, build trust, and contribute to
          a stronger and more sustainable future.
        </p>

        <div className={styles.md_author}>
          <h4>Aditya Raj</h4>
          <span>Managing Director</span>
        </div>
      </motion.div>
    </div>
  );
};

export default MessageSection;
