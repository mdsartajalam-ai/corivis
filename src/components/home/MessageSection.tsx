import Image from "next/image";
import { motion } from "framer-motion";
import styles from "@/styles/Home.module.css";
import directorImg from "@/assets/hero/Director.webp";

const MessageSection: React.FC = () => {
  return (
    <section className={styles.md_section}>
      <div className={styles.md_container}>
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={styles.md_image}
        >
          <Image
            src={directorImg}
            alt="Managing Director"
            width={450}
            height={550}
            priority
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={styles.md_content}
        >
          <span className={styles.md_badge}>
            MANAGING DIRECTOR MESSAGE
          </span>

          <h2>
            A Vision for <span>Growth & Excellence</span>
          </h2>

          <p>
            At Eceladdus Enllave Group, we believe every project is more than
            business—it is a commitment to creating lasting value for our
            clients, communities, and future generations.
          </p>

          <p>
            Through innovation, integrity, and a customer-first approach, we
            continue to expand our presence across infrastructure, technology,
            manpower services, solar energy, and real estate development.
          </p>

          <p>
            Our mission is simple: deliver quality, build trust, and contribute
            to a stronger and more sustainable future.
          </p>

          <div className={styles.md_author}>
            <h4>Aditya Raj</h4>
            <span>Managing Director</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MessageSection;